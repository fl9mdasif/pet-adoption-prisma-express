import express from "express";
import { AuthRoutes } from "../modules/auth/routes.auth";
import { userRouter } from "../modules/user/router.user";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/register",
    route: userRouter,
  },
  // {
  //   path: "/admin",
  //   route: AdminRoutes,
  // },
  {
    path: "/login",
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
