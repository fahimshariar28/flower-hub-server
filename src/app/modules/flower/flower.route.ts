import express from "express";
import validateZodRequest from "../../middlewares/validateZodRequest";
import { FlowerController } from "./flower.controller";
import { FlowerValidations } from "./flower.validation";
import authHelp from "../../middlewares/authHelp";

const router = express.Router();

router.post(
  "/",
  authHelp("manager"),
  validateZodRequest(FlowerValidations.createFlowerValidationSchema),
  FlowerController.addFlower
);

router.get("/", authHelp("seller", "manager"), FlowerController.getAllFlowers);

router.get("/:id", authHelp("seller", "manager"), FlowerController.getFlower);

router.put(
  "/:id",
  authHelp("manager"),
  validateZodRequest(FlowerValidations.updateFlowerValidationSchema),
  FlowerController.updateFlower
);

router.delete("/", authHelp("manager"), FlowerController.deleteFlower);

export const FlowerRoute = router;
