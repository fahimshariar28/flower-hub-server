import httpStatus from "http-status";
import catchAsyncFunc from "../../utils/catchAsyncFunc";
import sendResponseMessage from "../../utils/sendResponse";
import { FlowerServices } from "./flower.services";

const addFlower = catchAsyncFunc(async (req, res) => {
  const flower = await FlowerServices.addFlower(req.body);
  sendResponseMessage(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Flower added successfully",
    data: flower,
  });
});

const getAllFlowers = catchAsyncFunc(async (req, res) => {
  const flowers = await FlowerServices.getAllFlowers(req.query);
  sendResponseMessage(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Flowers fetched successfully",
    data: flowers,
  });
});

const getFlower = catchAsyncFunc(async (req, res) => {
  const flower = await FlowerServices.getFlower(req.params.id);
  sendResponseMessage(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Flower fetched successfully",
    data: flower,
  });
});

const updateFlower = catchAsyncFunc(async (req, res) => {
  const flower = await FlowerServices.updateFlower(req.params.id, req.body);
  sendResponseMessage(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Flower updated successfully",
    data: flower,
  });
});

const deleteFlower = catchAsyncFunc(async (req, res) => {
  await FlowerServices.deleteFlower(req.body);
  sendResponseMessage(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Flower deleted successfully",
  });
});

export const FlowerController = {
  addFlower,
  getAllFlowers,
  getFlower,
  updateFlower,
  deleteFlower,
};
