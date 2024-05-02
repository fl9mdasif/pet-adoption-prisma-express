// import express from "express";
// import { AdminController } from "./controller.admin";
// import validateRequest from "../../middlewares/validateRequest";
// import { adminValidationSchemas } from "./validation.admin";
// import auth from "../../middlewares/auth";
// import { UserRole } from "@prisma/client";

// const router = express.Router();

// // router.get("/", AdminController.getAllFromDB);

// // router.get(
// //   "/:id",
// //   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
// //   AdminController.getByIdFromDB
// // );

// // router.patch(
// //   "/:id",
// //   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
// //   validateRequest(adminValidationSchemas.update),
// //   AdminController.updateIntoDB
// // );

// // router.delete(
// //   "/:id",
// //   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
// //   AdminController.deleteFromDB
// // );

// // router.delete(
// //   "/soft/:id",
// //   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
// //   AdminController.softDeleteFromDB
// // );

// export const AdminRoutes = router;
