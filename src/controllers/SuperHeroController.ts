import { Request, Response } from "express";
import { fetchHero, fetchSearch } from "../services/SuperHeroApi";
import axios from "axios";

const total = 731;

export const getAllHeroesData = async (req: Request, res: Response) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);

  const allHeroes = [];

  try {
    const start = (page - 1) * limit;
    const end = start + limit;

    if (start >= total) {
      return res.json([]);
    }

    for (let id = start + 1; id <= end; id++) {
      const heroData = await fetchHero(id);
      allHeroes.push(heroData);
    }

    res.json(allHeroes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Heroes!" });
  }
};

export const getHeroData = async (req: Request, res: Response) => {
  const id = Number(req.query.id);

  try {
    const heroData = await fetchHero(id);

    res.json(heroData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Hero!" });
  }
};

export const getSearchData = async (req: Request, res: Response) => {
  const input = req.query.input as string;

  try {
    const searchData = await fetchSearch(input);

    res.json(searchData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Hero!" });
  }
};

export const proxyImage = async (req: Request, res: Response) => {
  const { url } = req.query;

  try {
    const response = await axios.get(url as string, {
      responseType: "arraybuffer",
    });
    const contentType = response.headers["content-type"];
    res.set("Content-Type", contentType);
    res.send(Buffer.from(response.data, "binary"));
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching image");
  }
};
