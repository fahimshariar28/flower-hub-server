import httpStatus from "http-status";
import GenericError from "../../errors/genericError";
import { Flower } from "../flower/flower.model";
import { TSale } from "./sale.interface";
import { Sale } from "./sale.model";

const addSale = async (payload: TSale) => {
  const { flowerId, quantity } = payload;
  const flower = await Flower.findById(flowerId);

  if (!flower) {
    throw new GenericError(httpStatus.NOT_FOUND, "Flower not found");
  }

  if (flower.quantity < quantity) {
    throw new GenericError(
      httpStatus.BAD_REQUEST,
      "Flower quantity is greater than available"
    );
  }

  const flowerQuantity = flower.quantity - quantity;
  await Flower.findByIdAndUpdate(flowerId, { quantity: flowerQuantity });

  const sale = await Sale.create(payload);
  return sale;
};

const getSales = async () => {
  const sales = await Sale.aggregate([
    {
      $lookup: {
        from: "flowers",
        localField: "flowerId",
        foreignField: "_id",
        as: "flower",
      },
    },
    {
      $unwind: "$flower",
    },
    {
      $project: {
        flowerId: 0,
        "flower.__v": 0,
        "flower._id": 0,
      },
    },
  ]);
  return sales;
};

export const SaleService = {
  addSale,
  getSales,
};
