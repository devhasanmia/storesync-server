import express, { NextFunction, Request, Response } from "express";
import { customerController } from "./customer.controller";
import { validateCustomer } from "./customer.validation ";
import { applyValidation } from "../../middlewares/applyValidation";
const router = express.Router();

router.post(
  "/add-customer",
  applyValidation(validateCustomer.create),
  customerController.addCustomer
);

export const customerRoute = router;
