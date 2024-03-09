import { Router } from "express";
import { FlowerRoute } from "../modules/flower/flower.route";
import { SaleRoute } from "../modules/sale/sale.route";

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
];

moduleRoutes?.forEach((route) => {
  router.use(route.path, route.route);
});
