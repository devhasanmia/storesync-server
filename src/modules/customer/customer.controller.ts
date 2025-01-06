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

const getCustomers: RequestHandler = asyncHandler(async (req, res) => {
  console.log(req.params.search)
  const customers = await customerService.getCustomers();
  res.status(200).json({
    status: true,
    message: "Customers fetched successfully",
    data: customers
  });
});


const getCustomer: RequestHandler = asyncHandler(async (req, res) => {
  const customer = await customerService.getCustomer(req.params.id);
  res.status(200).json({
    status: true,
    message: "Customer fetched successfully",
    data: customer
  });
});

const updateCustomer: RequestHandler = asyncHandler(async (req, res) => {
  const customer = await customerService.updateCustomer(req.params.id, req.body);
  res.status(200).json({
    status: true,
    message: "Customer updated successfully",
    data: customer
  });
});

const deleteCustomer: RequestHandler = asyncHandler(async (req, res) => {
  await customerService.deleteCustomer(req.params.id);
  res.status(200).json({
    status: true,
    message: "Customer deleted successfully"
  });
});


export const customerController = {
  addCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer
};
