import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { useExtractColors } from "react-extract-colors";

import axios from "axios";

import CustomHeader from "../components/CustomHeader";
import CustomTabs from "../components/CustomTabs";
import DetailHeroCard from "../components/DetailHeroCard";

import { Hero } from "../models/HeroApiResponse";

import { Loader } from "@mantine/core";

const DetailScreen = () => {
  const { id } = useParams();

  const location = useLocation();
  const imageURL = location.state?.imageURL;

  const [hero, setHero] = useState<Hero | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { lighterColor, dominantColor, darkerColor } = useExtractColors(
    imageURL,
    {
      sortBy: "vibrance",
    },
  );

  console.log(lighterColor, dominantColor, darkerColor);

  useEffect(() => {
    const fetchHeroData = () => {
      const url = `http://localhost:3000/hero/get-hero`;

      return axios
        .get(url, {
          params: {
            id: id,
          },
        })
        .then((response) => {
          const heroData = response.data as Hero;

          if (heroData) {
            setHero(heroData);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 1250);
        });
    };

    fetchHeroData();
  }, []);

  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <CustomHeader />
        {isLoading ? (
          <div className="flex h-screen w-full flex-col items-center justify-center bg-secondary-gray">
            <Loader className="mb-24" />
          </div>
        ) : (
          <div
            className="flex h-full w-full flex-1 flex-row items-center px-32"
            style={{
              backgroundImage: `linear-gradient(to top, ${lighterColor}, ${dominantColor}, ${darkerColor}, #110E11, #110E11, #110E11, #110E11, #110E11, #110E11, #110E11, #110E11)`,
            }}
          >
            <div className="flex w-full flex-row justify-between overflow-hidden">
              {hero && <DetailHeroCard imageURL={hero.image.url} />}
              <CustomTabs hero={hero} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailScreen;
