import express from "express";
import authHelp from "../../middlewares/authHelp";
import { CouponController } from "./coupon.controller";

const router = express.Router();

router.post("/", authHelp("manager"), CouponController.addCoupon);

router.get("/", authHelp("manager"), CouponController.getAllCoupons);

router.get(
  "/:couponCode",
  authHelp("manager", "seller"),
  CouponController.getCoupon
);

export const CouponRoute = router;
