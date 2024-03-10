import { Schema, model } from "mongoose";
import { TCupon } from "./coupon.interface";

export const CouponSchema = new Schema<TCupon>(
  {
    couponCode: {
      type: String,
      required: true,
      trim: true,
    },
    discount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Coupon = model<TCupon>("Coupon", CouponSchema);
