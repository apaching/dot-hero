import { Text } from "@mantine/core";

import { Hero } from "../models/HeroApiResponse";

import { FaShieldAlt } from "react-icons/fa";

interface Props {
  hero: Hero | null;
}

const Powerstats: React.FC<Props> = ({ hero }) => {
  return (
    <div className="flex w-full flex-col space-y-8 px-2">
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center">
          <FaShieldAlt color="#EC5162" size={20} />
          <Text className="ml-6 font-bold uppercase tracking-wider text-gray-500">
            Intelligence
          </Text>
        </div>
        <Text className="text-primary-yellow text-xl font-black">
          {hero?.powerstats.intelligence === "null"
            ? "N/A"
            : hero?.powerstats.intelligence}
        </Text>
      </div>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center">
          <FaShieldAlt color="#EC5162" size={20} />
          <Text className="ml-6 font-bold uppercase tracking-wider text-gray-500">
            Strength
          </Text>
        </div>
        <Text className="text-primary-yellow text-xl font-black">
          {hero?.powerstats.strength === "null"
            ? "N/A"
            : hero?.powerstats.strength}
        </Text>
      </div>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center">
          <FaShieldAlt color="#EC5162" size={20} />
          <Text className="ml-6 font-bold uppercase tracking-wider text-gray-500">
            Speed
          </Text>
        </div>
        <Text className="text-primary-yellow text-xl font-black">
          {hero?.powerstats.speed === "null" ? "N/A" : hero?.powerstats.speed}
        </Text>
      </div>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center">
          <FaShieldAlt color="#EC5162" size={20} />
          <Text className="ml-6 font-bold uppercase tracking-wider text-gray-500">
            Durability
          </Text>
        </div>
        <Text className="text-primary-yellow text-xl font-black">
          {hero?.powerstats.durability === "null"
            ? "N/A"
            : hero?.powerstats.durability}
        </Text>
      </div>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center">
          <FaShieldAlt color="#EC5162" size={20} />
          <Text className="ml-6 font-bold uppercase tracking-wider text-gray-500">
            Power
          </Text>
        </div>
        <Text className="text-primary-yellow text-xl font-black">
          {hero?.powerstats.power === "null" ? "N/A" : hero?.powerstats.power}
        </Text>
      </div>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center">
          <FaShieldAlt color="#EC5162" size={20} />
          <Text className="ml-6 font-bold uppercase tracking-wider text-gray-500">
            Combat
          </Text>
        </div>
        <Text className="text-primary-yellow text-xl font-black">
          {hero?.powerstats.combat === "null" ? "N/A" : hero?.powerstats.combat}
        </Text>
      </div>
    </div>
  );
};

export default Powerstats;
