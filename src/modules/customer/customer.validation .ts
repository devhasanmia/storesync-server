import { z } from "zod";

const customerValidation = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string"
      })
      .min(3, { message: "Name must be at least 3 characters long" })
      .max(30, { message: "Name must be at most 50 characters long" }),
    mobile: z
      .string({
        required_error: "Mobile is required",
        invalid_type_error: "Mobile must be a string"
      })
      .max(11, { message: "Mobile must be at most 11 characters long" }),
    email: z
      .string({
        invalid_type_error: "Email must be a string"
      })
      .email({ message: "Invalid email address" })
      .optional(),
    address: z.string({
      required_error: "Address is required",
      invalid_type_error: "Address must be a string"
    }).min(10, { message: "Address must be at least 10 characters long" }).max(100, { message: "Address must be at most 100 characters long" }),
    gender: z.enum(["Male", "Female", "Other"], {
      required_error: "Gender is required",
      invalid_type_error: "Gender must be a string"
    }),
    nid: z
      .number({
        invalid_type_error: "NID must be a number"
      })
      .optional(),
    dob: z
      .string({
        invalid_type_error: "DOB must be a string"
      })
      .optional(),
    due: z
      .number({
        invalid_type_error: "Due must be a number"
      })
      .optional(),
    balance: z
      .number({
        invalid_type_error: "Balance must be a number"
      })
      .optional()
  })
});

export const validateCustomer = {
  create: customerValidation
};
