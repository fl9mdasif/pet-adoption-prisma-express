import express from "express";
import auth from "../../middlewares/auth";
import { PetController } from "./controller.pet";
import validateRequest from "../../middlewares/validateRequest";
import { petValidationSchemas } from "./validation.pet";

const router = express.Router();

router.get("/", auth(), PetController.getAllFromDB);

router.post(
  "/",
  auth(),
  validateRequest(petValidationSchemas.createPetValidationSchema),
  PetController.createPet
);

router.patch(
  "/:id",
  auth(),
  validateRequest(petValidationSchemas.updatePetValidationSchema),
  PetController.updateIntoDB
);

export const petRoutes = router;
