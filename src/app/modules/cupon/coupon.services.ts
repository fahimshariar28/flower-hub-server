import { TCupon } from "./coupon.interface";
import { Coupon } from "./coupon.model";

const addCoupon = async (coupon: TCupon) => {
  return await Coupon.create(coupon);
};

const getAllCoupons = async () => {
  return await Coupon.find();
};

const getCoupon = async (couponCode: string) => {
  return await Coupon.findOne({
    couponCode,
  });
};

export const CouponServices = {
  addCoupon,
  getAllCoupons,
  getCoupon,
};
