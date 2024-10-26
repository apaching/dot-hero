import express from "express";
import {
  getAllHeroesData,
  getHeroData,
  getSearchData,
  proxyImage,
} from "../controllers/SuperHeroController";

export const router = express.Router();

router.get("/get-heroes", getAllHeroesData as any);
router.get("/get-hero", getHeroData as any);
router.get("/proxy-image", proxyImage as any);
router.get("/search", getSearchData as any);
