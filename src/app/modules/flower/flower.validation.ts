import { z } from "zod";
import {
  BLOOM,
  COLOR,
  FLOWER_TYPE,
  FRAGRANCE,
  OCCASIONS,
  SIZE,
} from "./flower.constant";

const createFlowerValidationSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),

  price: z.number({
    required_error: "Price is required",
  }),

  quantity: z.number({
    required_error: "Quantity is required",
  }),

  type: z.enum(FLOWER_TYPE, {
    required_error: "Flower Type is required",
  }),

  color: z.enum(COLOR, {
    required_error: "Color is required",
  }),

  bloom: z.enum(BLOOM, {
    required_error: "Bloom is required",
  }),

  size: z.enum(SIZE, {
    required_error: "Size is required",
  }),

  fragrance: z.enum(FRAGRANCE, {
    required_error: "Fragrance is required",
  }),

  occasions: z.enum(OCCASIONS, {
    required_error: "Occasions is required",
  }),
});

const updateFlowerValidationSchema = z.object({
  name: z.string().optional(),

  price: z.number().optional(),

  quantity: z.number().optional(),

  type: z.enum(FLOWER_TYPE).optional(),

  color: z.enum(COLOR).optional(),

  bloom: z.enum(BLOOM).optional(),

  size: z.enum(SIZE).optional(),

  fragrance: z.enum(FRAGRANCE).optional(),

  occasions: z.enum(OCCASIONS).optional(),
});

export const FlowerValidations = {
  createFlowerValidationSchema,
  updateFlowerValidationSchema,
};
