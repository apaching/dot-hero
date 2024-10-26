export interface Hero {
  response: string;
  id: string;
  name: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  image: Image;
}

export interface Powerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

export interface Biography {
  "full-name": string;
  "alter-egos": string;
  aliases: string[];
  "place-of-birth": string;
  "first-appearance": string;
  publisher: string;
  alignment: string;
}

export interface Appearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  "eye-color": string;
  "hair-color": string;
}

export interface Work {
  occupation: string;
  base: string;
}

export interface Connections {
  "group-affiliation": string;
  relatives: string;
}

export interface Image {
  url: string;
}

export interface SearchData {
  value: string;
  name: string;
  url: string;
}

export type HeroRecord = Record<
  string,
  { name: string; image: string; real_name: string }
>;
