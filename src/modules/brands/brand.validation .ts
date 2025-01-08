import { z } from "zod";

export const brandValidation = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Brand Name is required",
        invalid_type_error: "Brand must be a valid string"
      })
      .min(2, { message: "Brand must be at least 2 characters long" })
      .max(30, { message: "Brand must be at most 30 characters long" })
  })
});
