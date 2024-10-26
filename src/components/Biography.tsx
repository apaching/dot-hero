import { Text } from "@mantine/core";

import { Hero } from "../models/HeroApiResponse";

interface Props {
  hero: Hero | null;
}

const Biography: React.FC<Props> = ({ hero }) => {
  return (
    <div className="flex flex-col space-y-10">
      <Text className="text font-poppins text-xl font-bold text-gray-500">
        Full Name:
        <span className="ml-4 font-light text-white">
          {hero?.biography["full-name"]}
        </span>
      </Text>
      <Text className="font-poppins text-xl font-bold text-gray-500">
        Alter Egos:
        <span className="ml-4 font-light text-white">
          {hero?.biography["alter-egos"]}
        </span>
      </Text>
      <Text className="font-poppins text-xl font-bold text-gray-500">
        Aliases:
        <span className="ml-4 font-light text-white">
          {hero?.biography.aliases.join(", ")}
        </span>
      </Text>
      <Text className="font-poppins text-xl font-bold text-gray-500">
        First Appearance:
        <span className="ml-4 font-light text-white">
          {hero?.biography["first-appearance"]}
        </span>
      </Text>
      <Text className="font-poppins text-xl font-bold text-gray-500">
        Publisher:
        <span className="ml-4 font-light text-white">
          {hero?.biography.publisher}
        </span>
      </Text>
    </div>
  );
};

export default Biography;
