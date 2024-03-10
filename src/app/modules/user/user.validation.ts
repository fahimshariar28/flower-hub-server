import { z } from "zod";

const passFormat =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

const createUserValidationSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),

  email: z.string({
    required_error: "Email is required",
  }),

  password: z
    .string({
      required_error: "Password is required",
    })
    .refine((value) => passFormat.test(value), {
      message:
        "Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character",
    }),

  role: z.enum(["seller", "manager"]).optional(),
});

export const UserValidations = {
  createUserValidationSchema,
};
