import express, { Request, Response } from "express";
// import { userController } from "./controller.user";
// import auth from "../../middlewares/auth";
// import { UserRole } from "@prisma/client";

const router = express.Router();

// router.post(
//   "/",
//   auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
//   userController.createAdmin
// );

export const userRouter = router;
