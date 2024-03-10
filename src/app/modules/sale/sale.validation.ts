import { z } from "zod";

const createSaleValidationSchema = z.object({
  flowerId: z.string({
    required_error: "Flower ID is required",
  }),
  quantity: z.number({
    required_error: "Quantity is required",
  }),
  price: z.number({
    required_error: "Price is required",
  }),
  sellerName: z.string({
    required_error: "Seller name is required",
  }),
  buyerName: z.string({
    required_error: "Buyer name is required",
  }),
  date: z.string({
    required_error: "Date is required",
  }),
});

export const SaleValidations = {
  createSaleValidationSchema,
};
