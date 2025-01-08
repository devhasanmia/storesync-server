import express from "express";

import { applyValidation } from "../../middlewares/applyValidation";
import { categoryValidation } from "./category.validation ";
import { categoryController } from "./category.controller";
const router = express.Router();

router.post(
  "/add-category",
  applyValidation(categoryValidation),
  categoryController.addCategory
);

router.get("/get-categories", categoryController.getCategories)

export const categoryRoute = router;
