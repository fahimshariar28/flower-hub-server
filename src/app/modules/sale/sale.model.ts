import { Schema, model } from "mongoose";
import { TSale } from "./sale.interface";

export const SaleSchema = new Schema<TSale>({
  flowerId: {
    type: Schema.Types.ObjectId,
    ref: "Flower",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  buyerName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Sale = model<TSale>("Sale", SaleSchema);
