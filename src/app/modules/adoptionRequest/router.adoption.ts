import express from "express";
import auth from "../../middlewares/auth";
import { AdoptionController } from "./controller.adoption";
import validateRequest from "../../middlewares/validateRequest";
import { adoptionValidationSchemas } from "./validation.adoption";

const router = express.Router();

router.get("/", AdoptionController.getAllFromDB);

router.post(
  "/",
  auth(),
  validateRequest(adoptionValidationSchemas.createAdoptionValidationSchema),
  AdoptionController.createAdoptionRequest
);
// router.get(
//   "/:id",
//   // auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
//   PetController.getByIdFromDB
// );

router.patch(
  "/:id",
  // auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(adoptionValidationSchemas.updateAdoptionValidationSchema),
  AdoptionController.updateIntoDB
);

// // router.delete(
// //   "/:id",
// //   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
// //   PetController.deleteFromDB
// // );

// // router.delete(
// //   "/soft/:id",
// //   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
// //   PetController.softDeleteFromDB
// // );

export const adoptionRoutes = router;
