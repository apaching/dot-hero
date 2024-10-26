import { Tabs, Text } from "@mantine/core";

import classes from "./CustomTabs.module.css";
import Biography from "./Biography";
import { Hero } from "../models/HeroApiResponse";
import Powerstats from "./Powerstats";
import Appearance from "./Appearance";

interface Props {
  hero: Hero | null;
}

const CustomTabs: React.FC<Props> = ({ hero }) => {
  return (
    <div className="flex w-full max-w-[50vw] flex-col">
      <Text className="mb-6 font-poppins text-4xl font-extrabold uppercase tracking-wider text-white">
        {hero?.name}
      </Text>
      <Tabs
        autoContrast={true}
        color="#EC5162"
        radius="sm"
        defaultValue="biography"
        classNames={classes}
      >
        <Tabs.List grow className="mb-8">
          <Tabs.Tab value="biography">
            <p className="font-poppins font-medium uppercase tracking-tighter text-gray-50">
              Biography
            </p>
          </Tabs.Tab>
          <Tabs.Tab value="powerstats">
            <p className="font-poppins font-medium uppercase tracking-tighter text-gray-50">
              Powerstats
            </p>
          </Tabs.Tab>
          <Tabs.Tab value="appearance">
            <p className="font-poppins font-medium uppercase tracking-tighter text-gray-50">
              Appearance
            </p>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="biography">
          <Biography hero={hero} />
        </Tabs.Panel>
        <Tabs.Panel value="powerstats">
          <Powerstats hero={hero} />
        </Tabs.Panel>
        <Tabs.Panel value="appearance">
          <Appearance hero={hero} />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default CustomTabs;
