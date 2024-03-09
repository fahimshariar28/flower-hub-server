import express from "express";
import validateZodRequest from "../../middlewares/validateZodRequest";
import { FlowerController } from "./flower.controller";
import { FlowerValidations } from "./flower.validation";
import authHelp from "../../middlewares/authHelp";

const router = express.Router();

router.post(
  "/",
  authHelp("user"),
  validateZodRequest(FlowerValidations.createFlowerValidationSchema),
  FlowerController.addFlower
);

router.get("/", authHelp("user"), FlowerController.getAllFlowers);

router.get("/:id", authHelp("user"), FlowerController.getFlower);

router.put(
  "/:id",
  authHelp("user"),
  validateZodRequest(FlowerValidations.updateFlowerValidationSchema),
  FlowerController.updateFlower
);

router.delete("/", authHelp("user"), FlowerController.deleteFlower);

export const FlowerRoute = router;
