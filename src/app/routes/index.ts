import express from "express";
// import { AuthRoutes } from "../modules/auth/routes.auth";
import { userRouter } from "../modules/user/router.user";
import { AuthRoutes } from "../modules/auth/routes.auth";
import { petRoutes } from "../modules/pet/router.pet";
import { adoptionRoutes } from "../modules/adoptionRequest/router.adoption";
import { UserProfileRoutes } from "../modules/userProfile/router.userProfile";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/register",
    route: userRouter,
  },
  {
    path: "/login",
    route: AuthRoutes,
  },
  {
    path: "/pets",
    route: petRoutes,
  },
  {
    path: "/adoption-requests",
    route: adoptionRoutes,
  },
  {
    path: "/profile",
    route: UserProfileRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
