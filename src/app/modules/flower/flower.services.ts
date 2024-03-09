import httpStatus from "http-status";
import GenericError from "../../errors/genericError";
import { TFlower } from "./flower.interface";
import { Flower } from "./flower.model";
import { flowerFilter } from "./flower.filter";

const addFlower = async (payload: TFlower) => {
  const flower = await Flower.create(payload);
  return flower;
};

const getAllFlowers = async (query: Record<string, unknown>) => {
  const { filter, sort } = flowerFilter(query);

  const flowers = await Flower.find(filter).sort(sort);
  return flowers.filter((flower) => flower.quantity > 0);
};

const getFlower = async (id: string) => {
  const flower = await Flower.findById(id);
  if (!flower) {
    throw new GenericError(httpStatus.NOT_FOUND, "Flower not found");
  }
  return flower;
};

const updateFlower = async (FlowerId: string, payload: Partial<TFlower>) => {
  const flower = await Flower.findById(FlowerId);
  if (!flower) {
    throw new GenericError(httpStatus.NOT_FOUND, "Flower not found");
  }

  const updatedFlower = await Flower.findByIdAndUpdate(FlowerId, payload, {
    new: true,
  });

  return updatedFlower;
};

const deleteFlower = async (id: string[]) => {
  const flowers = await Flower.deleteMany({ _id: { $in: id } });
  return flowers;
};

export const FlowerServices = {
  addFlower,
  getAllFlowers,
  getFlower,
  updateFlower,
  deleteFlower,
};
