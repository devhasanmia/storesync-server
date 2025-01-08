import express from "express";
import { unitSeed } from "../../utils/seeding/unitSeed";
const router = express.Router();

router.post("/", unitSeed);

export const unitRoute = router