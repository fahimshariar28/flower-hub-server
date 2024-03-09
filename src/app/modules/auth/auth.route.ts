import express from "express";
import validateZodRequest from "../../middlewares/validateZodRequest";
import { AuthControllers } from "./auth.controller";
import { LoginValidations } from "./auth.validation";

const router = express.Router();
router.post(
  "/",
  validateZodRequest(LoginValidations.loginValidationSchema),
  AuthControllers.loginUser
);

export const AuthRoutes = router;
