import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";

export const AuthRouter = Router();
const authRoutes = [
  {
    path: "/register",
    route: UserRoutes,
  },
  {
    path: "/login",
    route: AuthRoutes,
  },
];
authRoutes.forEach((route) => {
  AuthRouter.use(route.path, route.route);
});
