import express from "express";
import validateZodRequest from "../../middlewares/validateZodRequest";
import { SaleValidations } from "./sale.validation";
import { SaleController } from "./sale.controller";
import authHelp from "../../middlewares/authHelp";

const router = express.Router();

router.post(
  "/",
  authHelp("user"),
  validateZodRequest(SaleValidations.createSaleValidationSchema),
  SaleController.addSale
);

router.get("/", authHelp("user"), SaleController.getSales);

export const SaleRoute = router;
