import { Types } from "mongoose";

export type TSale = {
  flowerId: Types.ObjectId;
  quantity: number;
  price: number;
  sellerName: string;
  buyerName: string;
  date: string;
};
