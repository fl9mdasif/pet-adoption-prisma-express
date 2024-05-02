import express, { Request, Response } from "express";
import auth from "../../middlewares/auth";
// import { userController } from "./controller.user";
// import auth from "../../middlewares/auth";
// import { UserRole } from "@prisma/client";
import { userController } from "./controller.user";
import validateRequest from "../../middlewares/validateRequest";
import { userValidationSchema } from "./validation.user";

const router = express.Router();

router.post(
  "/",
  //   auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(userValidationSchema.UserRegSchema),
  userController.createUser
);

export const userRouter = router;
