import { RequestHandler } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { brandService } from "./brand.service";

const addBrand: RequestHandler = asyncHandler(async (req, res) => {
  const brand = await brandService.addBrand(req.body);
  res.status(201).json({
    status: true,
    message: "brand added successfully",
    data: brand
  });
});

const getBrand: RequestHandler = asyncHandler(async (req, res) => {
  const brand = await brandService.getBrands(req.query);
  res.status(200).json({
    status: true,
    message: "All Brand Retrive Successfully",
    data: brand
  });
});

export const brandController = { addBrand, getBrand };
