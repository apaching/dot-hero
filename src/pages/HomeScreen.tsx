import HeroCard from "../components/MainHeroCard";
import CustomHeader from "../components/CustomHeader";

import axios from "axios";

import { useState, useEffect } from "react";
import { Hero } from "../models/HeroApiResponse";
import { Loader } from "@mantine/core";

import "../utils/CssLoader.module.css";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [page, setPage] = useState(1);
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const [hasMore, seetHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHeroes = async (page: number) => {
    const url = `http://localhost:3000/hero/get-heroes`;

    if (isLoading || !hasMore) return;
    setIsLoading(true);

    return axios
      .get(url, {
        params: {
          page: page,
          limit: 24,
        },
      })
      .then((response) => {
        const heroData = response.data as Hero[];

        if (heroData.length) {
          setHeroes((prevHeroes) => {
            const newHeroes = heroData.filter(
              (newHero) => !prevHeroes.some((hero) => hero.id === newHero.id),
            );
            return [...prevHeroes, ...newHeroes];
          });
        } else {
          seetHasMore(false);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchHeroes(page);
  }, [page]);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (
      scrollTop + clientHeight >= scrollHeight - 400 &&
      !isLoading &&
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, hasMore]);

  return (
    <>
      {heroes.length === 0 && isLoading ? (
        <div className="flex h-screen flex-col">
          <CustomHeader />
          <div className="flex h-screen w-full flex-col items-center justify-center bg-secondary-gray">
            <Loader className="mb-24" />
          </div>
        </div>
      ) : (
        <>
          <CustomHeader />
          <div className="flex h-full w-full flex-row flex-wrap justify-center gap-6 overflow-hidden bg-secondary-gray px-16 pb-12 pt-12">
            {heroes.map((hero) => (
              <Link
                key={hero.id}
                to={`/hero/${hero.id}/${hero.name}`}
                state={{
                  imageURL: `http://localhost:3000/hero/proxy-image?url=${encodeURIComponent(hero.image.url)}`,
                }}
              >
                <HeroCard
                  heroName={hero.name}
                  realName={hero.biography["full-name"]}
                  imageURL={hero.image.url}
                />
              </Link>
            ))}
          </div>

          {isLoading && (
            <div className="flex w-full flex-row justify-center bg-secondary-gray">
              <Loader className="mb-6" />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default HomeScreen;
