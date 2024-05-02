import express from "express";
import auth from "../../middlewares/auth";
import { UserProfileController } from "./controller.userProfile";
import { userProfileUpdateSchema } from "./validation.userProfile";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.get("/", auth(), UserProfileController.getMyProfile);
router.patch(
  "/",
  auth(),
  validateRequest(userProfileUpdateSchema),
  UserProfileController.updateMyProfile
);

export const UserProfileRoutes = router;
