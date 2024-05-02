import express from "express";
import auth from "../../middlewares/auth";
import { userController } from "./controller.user";
import validateRequest from "../../middlewares/validateRequest";
import { userValidationSchema } from "./validation.user";

const router = express.Router();

router.post(
  "/",
  auth(),
  validateRequest(userValidationSchema.UserRegSchema),
  userController.createUser
);

export const userRouter = router;
