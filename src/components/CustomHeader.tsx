import { CiSearch } from "react-icons/ci";
import {
  Autocomplete,
  AutocompleteProps,
  Avatar,
  Group,
  Text,
  Image,
  OptionsFilter,
  ComboboxItem,
} from "@mantine/core";
import dotmov_logo from "../assets/dotmov-logo.png";
import { Hero, HeroRecord, SearchData } from "../models/HeroApiResponse";
import { useEffect, useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
import { Link } from "react-router-dom";

const CustomHeader = () => {
  const [heroData, setHeroData] = useState<Hero[]>([]);
  const [heroRecord, setHeroRecord] = useState<HeroRecord>({});
  const [searchData, setSearchData] = useState<SearchData[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const renderAutocompleteOption: AutocompleteProps["renderOption"] = ({
    option,
  }) => {
    const hero = heroRecord[option.value];

    return hero ? (
      <Group gap="sm">
        <Avatar src={hero.image} size={36} radius="xl" />
        <div>
          <Text size="sm">{hero.name}</Text>
          <Text size="xs" opacity={0.5}>
            {hero.real_name}
          </Text>
        </div>
      </Group>
    ) : null;
  };

  useEffect(() => {
    const fetchHeroes = debounce(async () => {
      const url = `http://localhost:3000/hero/search`;

      if (searchInput.trim().length === 0) {
        setHeroData([]);
        setHeroRecord({});

        return;
      }

      axios
        .get(url, {
          params: {
            input: searchInput,
          },
        })
        .then((response) => {
          const heroData = response.data.results;

          const record: HeroRecord = {};
          heroData.forEach((hero: Hero) => {
            record[hero.id] = {
              name: hero.name,
              image: hero.image.url,
              real_name: hero.biography["full-name"],
            };
          });

          const formattedData = heroData.map((hero: Hero) => ({
            value: hero.id,
            name: hero.name,
            url: hero.image?.url,
          }));

          setHeroData(heroData);
          setHeroRecord(record);
          setSearchData(formattedData);
        })
        .catch((error) => {
          console.log(error);
          return [];
        });
    }, 500);

    fetchHeroes();
  }, [searchInput]);

  return (
    <header
      className="over sticky top-0 z-10 h-20 border-b-2 bg-primary-gray px-14"
      style={{ borderBottom: "2px solid #242424" }}
    >
      <div className="flex h-full items-center justify-between">
        <Group>
          <Link to={`/home`} replace>
            <p className="font-poppins text-4xl font-extrabold tracking-tighter text-white">
              DOT<span className="text-primary-pink">HERO</span>
            </p>
          </Link>
          <Image src={dotmov_logo} className="h-8 w-8" />
        </Group>
        <Group>{}</Group>
      </div>
    </header>
  );
};

export default CustomHeader;

{
  /* <Autocomplete
            placeholder="Search..."
            leftSection={<CiSearch />}
            radius={"sm"}
            data={searchData}
            maxDropdownHeight={300}
            renderOption={renderAutocompleteOption}
            styles={{
              input: {
                backgroundColor: "#110E11",
                color: "#939AA0",
                borderColor: "#362c36",
              },
            }}
            onChange={setSearchInput}
          /> */
}
