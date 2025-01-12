import { z } from "zod";

export const categoryValidation = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Category Name is required",
        invalid_type_error: "Category must be a valid string"
      })
      .min(2, { message: "Category must be at least 2 characters long" })
      .max(50, { message: "Category must be at most 50 characters long" })
  })
});
