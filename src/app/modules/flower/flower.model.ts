import { Schema, model } from "mongoose";
import { TFlower } from "./flower.interface";
import {
  BLOOM,
  COLOR,
  FLOWER_TYPE,
  FRAGRANCE,
  OCCASIONS,
  SIZE,
} from "./flower.constant";

export const FlowerSchema = new Schema<TFlower>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: FLOWER_TYPE,
      required: true,
    },
    color: {
      type: String,
      enum: COLOR,
      required: true,
    },
    bloom: {
      type: String,
      enum: BLOOM,
      required: true,
    },
    size: {
      type: String,
      enum: SIZE,
      required: true,
    },
    fragrance: {
      type: String,
      enum: FRAGRANCE,
      required: true,
    },
    occasions: {
      type: String,
      enum: OCCASIONS,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Flower = model<TFlower>("Flower", FlowerSchema);
