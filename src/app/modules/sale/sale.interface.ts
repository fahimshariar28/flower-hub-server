import { Types } from "mongoose";

export type TSale = {
  flowerId: Types.ObjectId;
  quantity: number;
  price: number;
  buyerName: string;
  date: string;
};
