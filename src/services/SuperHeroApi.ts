import axios from "axios";
import "dotenv/config";
import { Hero } from "../models/HeroApiResponse";

const heroCache: Record<number, Hero> = {};

export const fetchHero = (id: number) => {
  if (heroCache[id]) {
    return heroCache[id];
  }

  const url = `https://superheroapi.com/api/${process.env.API_KEY}/${id}`;

  return axios
    .get(url)
    .then((response) => {
      console.log("API Response:", response.data);
      heroCache[id] = response.data;
      return response.data;
    })
    .catch((error) => {
      console.log("Error fetching heroes: ", error);
      throw error;
    });
};

export const fetchSearch = (input: string) => {
  const url = `https://superheroapi.com/api/${process.env.API_KEY}/search/${input}`;

  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
