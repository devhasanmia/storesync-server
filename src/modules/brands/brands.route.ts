import express from "express";

import { applyValidation } from "../../middlewares/applyValidation";
import { brandValidation } from "./brand.validation ";
import { brandController } from "./brand.controller";
const router = express.Router();

router.post(
  "/add-brand",
  applyValidation(brandValidation),
  brandController.addBrand
);

router.get("/get-brands", brandController.getBrand)

export const brandRoute = router;
