import catchAsyncFunc from "../../utils/catchAsyncFunc";
import sendResponseMessage from "../../utils/sendResponse";
import { SaleService } from "./sale.service";

const addSale = catchAsyncFunc(async (req, res) => {
  const sale = await SaleService.addSale(req.body);
  sendResponseMessage(res, {
    success: true,
    statusCode: 201,
    message: "Sale details added successfully",
    data: sale,
  });
});

const getSales = catchAsyncFunc(async (req, res) => {
  const sales = await SaleService.getSales();
  sendResponseMessage(res, {
    success: true,
    statusCode: 201,
    message: "Sales details fetched successfully",
    data: sales,
  });
});

export const SaleController = {
  addSale,
  getSales,
};
