import { FaStar } from "react-icons/fa";

import { Text } from "@mantine/core";

import { Hero } from "../models/HeroApiResponse";

interface Props {
  hero: Hero | null;
}

const Appearance: React.FC<Props> = ({ hero }) => {
  return (
    <div className="flex w-full flex-col space-y-10 px-2">
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center">
          <FaStar color="#EC5162" size={20} />
          <Text className="ml-6 font-bold uppercase tracking-wider text-gray-500">
            Gender
          </Text>
        </div>
        <Text className="text-primary-yellow text-xl font-black">
          {hero?.appearance.gender === "null" ? "N/A" : hero?.appearance.gender}
        </Text>
      </div>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center">
          <FaStar color="#EC5162" size={20} />
          <Text className="ml-6 font-bold uppercase tracking-wider text-gray-500">
            Race
          </Text>
        </div>
        <Text className="text-primary-yellow text-xl font-black">
          {hero?.appearance.race === "null" ? "N/A" : hero?.appearance.race}
        </Text>
      </div>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center">
          <FaStar color="#EC5162" size={20} />
          <Text className="ml-6 font-bold uppercase tracking-wider text-gray-500">
            Height
          </Text>
        </div>
        <Text className="text-primary-yellow text-xl font-black">
          {hero?.appearance.height[0] === "-"
            ? "N/A"
            : `${hero?.appearance.height[0].split(" ")[0]} cm`}
        </Text>
      </div>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center">
          <FaStar color="#EC5162" size={20} />
          <Text className="ml-6 font-bold uppercase tracking-wider text-gray-500">
            Weight
          </Text>
        </div>
        <Text className="text-primary-yellow text-xl font-black">
          {hero?.appearance.weight[0] === "- lb"
            ? "N/A"
            : `${hero?.appearance.weight[0].split(" ")[0]} lb`}
        </Text>
      </div>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center">
          <FaStar color="#EC5162" size={20} />
          <Text className="ml-6 font-bold uppercase tracking-wider text-gray-500">
            Eye Color
          </Text>
        </div>
        <Text className="text-primary-yellow text-xl font-black">
          {hero?.appearance["eye-color"] === "-"
            ? "N/A"
            : hero?.appearance["eye-color"]}
        </Text>
      </div>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center">
          <FaStar color="#EC5162" size={20} />
          <Text className="ml-6 font-bold uppercase tracking-wider text-gray-500">
            Hair color
          </Text>
        </div>
        <Text className="text-primary-yellow text-xl font-black">
          {hero?.appearance["hair-color"] === "-"
            ? "N/A"
            : hero?.appearance["hair-color"]}
        </Text>
      </div>
    </div>
  );
};

export default Appearance;
