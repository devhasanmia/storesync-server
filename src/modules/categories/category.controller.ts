import { RequestHandler } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { categoryService } from "./category.service";

const addCategory: RequestHandler = asyncHandler(async (req, res) => {
  const category = await categoryService.addCategory(req.body);
  res.status(201).json({
    status: true,
    message: "Category added successfully",
    data: category
  });
});

const getCategories: RequestHandler = asyncHandler(async (req, res) => {
  const category = await categoryService.getCategories();
  res.status(200).json({
    status: true,
    message: "All Category Retrive",
    data: category
  });
});

export const categoryController = {
  addCategory,
  getCategories
};
