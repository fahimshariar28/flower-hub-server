import httpStatus from "http-status";
import sendResponseMessage from "../../utils/sendResponse";
import { CouponServices } from "./coupon.services";
import catchAsyncFunc from "../../utils/catchAsyncFunc";

const addCoupon = catchAsyncFunc(async (req, res) => {
  const coupon = await CouponServices.addCoupon(req.body);
  sendResponseMessage(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Coupon added successfully",
    data: coupon,
  });
});

const getAllCoupons = catchAsyncFunc(async (req, res) => {
  const coupons = await CouponServices.getAllCoupons();
  sendResponseMessage(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Coupons fetched successfully",
    data: coupons,
  });
});

const getCoupon = catchAsyncFunc(async (req, res) => {
  const coupon = await CouponServices.getCoupon(req.params.couponCode);
  sendResponseMessage(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Coupon fetched successfully",
    data: coupon,
  });
});

export const CouponController = {
  addCoupon,
  getAllCoupons,
  getCoupon,
};
