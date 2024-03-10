import { Router } from "express";
import { FlowerRoute } from "../modules/flower/flower.route";
import { SaleRoute } from "../modules/sale/sale.route";
import { CouponRoute } from "../modules/cupon/coupon.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/flower",
    route: FlowerRoute,
  },
  {
    path: "/sale",
    route: SaleRoute,
  },
  {
    path: "/coupon",
    route: CouponRoute,
  },
];

moduleRoutes?.forEach((route) => {
  router.use(route.path, route.route);
});
