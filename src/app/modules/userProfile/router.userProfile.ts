import express from "express";
import auth from "../../middlewares/auth";
import { UserProfileController } from "./controller.userProfile";
import { userProfileUpdateSchema } from "./validation.userProfile";
import validateRequest from "../../middlewares/validateRequest";
import { UserRole } from "@prisma/client";

const router = express.Router();

// update user role, status by admin
router.patch(
  "/:userId",
  auth(UserRole.ADMIN),
  validateRequest(userProfileUpdateSchema),
  UserProfileController.updateUserByAdmin
);

// delete user
router.delete(
  "/:userId",
  auth(UserRole.ADMIN),
  UserProfileController.deleteUserFromDB
);

// get me
router.get(
  "/me",
  auth(UserRole.ADMIN, UserRole.USER),
  UserProfileController.getMyProfile
);

//get all user
router.get(
  "/get-all",
  auth(UserRole.ADMIN, UserRole.USER),
  UserProfileController.getAllUser
);

router.get(
  "/my-adoptions",
  auth(UserRole.ADMIN, UserRole.USER),
  UserProfileController.myAdoptions
);

// update profile via user
router.patch(
  "/",
  auth(UserRole.ADMIN, UserRole.USER),
  validateRequest(userProfileUpdateSchema),
  UserProfileController.updateMyProfile
);

export const UserProfileRoutes = router;
