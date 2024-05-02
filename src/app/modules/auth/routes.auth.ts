import express from "express";
import { AuthController } from "./controller.auth";
// import auth from "../../middlewares/auth";
// // import { AuthController } from "./controller.auth";
// import { UserRole } from "@prisma/client";
// // import auth from "../../middlewares/auth";
// // // import auth from "../../middlewares/auth";

const router = express.Router();
// router.post(
//   "/",
//   auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
//   userController.createAdmin
// );

router.post("/", AuthController.loginUser);

// // router.post("/refresh-token", AuthController.refreshToken);

// // router.post(
// //   "/change-password",
// //   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
// //   AuthController.changePassword
// // );

// // router.post("/forgot-password", AuthController.forgotPassword);

// // router.post("/reset-password", AuthController.resetPassword);

export const AuthRoutes = router;
