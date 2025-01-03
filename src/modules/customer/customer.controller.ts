import { RequestHandler } from "express";
import { customerService } from "./customer.service";
import { asyncHandler } from "../../utils/asyncHandler";

const addCustomer: RequestHandler = asyncHandler(async (req, res) => {
  const customer = await customerService.addCustomer(req.body);
  res.status(201).json({
    status: true,
    message: "Customer added successfully",
    data: customer
  });
});

export const customerController = {
  addCustomer
};
