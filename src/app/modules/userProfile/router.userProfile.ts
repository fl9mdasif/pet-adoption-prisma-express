import express from "express";
import auth from "../../middlewares/auth";
import { UserProfileController } from "./controller.userProfile";
import { userProfileUpdateSchema } from "./validation.userProfile";
import validateRequest from "../../middlewares/validateRequest";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.get(
  "/",
  auth(UserRole.ADMIN, UserRole.USER),
  UserProfileController.getMyProfile
);
router.get(
  "/my-adoptions",
  auth(UserRole.ADMIN, UserRole.USER),
  UserProfileController.myAdoptions
);

router.patch(
  "/",
  auth(UserRole.ADMIN, UserRole.USER),
  validateRequest(userProfileUpdateSchema),
  UserProfileController.updateMyProfile
);

export const UserProfileRoutes = router;
