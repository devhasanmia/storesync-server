import express from "express";
import { customerController } from "./customer.controller";
import { validateCustomer } from "./customer.validation ";
import { applyValidation } from "../../middlewares/applyValidation";
const router = express.Router();

router.post(
  "/add-customer",
  applyValidation(validateCustomer.create),
  customerController.addCustomer
);

router.get("/get-customers", customerController.getCustomers);
router.get("/get-customer/:id", customerController.getCustomer);
router.put("/update-customer/:id", customerController.updateCustomer);
router.delete("/delete-customer/:id", customerController.deleteCustomer);
export const customerRoute = router;
