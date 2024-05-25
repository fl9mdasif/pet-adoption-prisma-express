import express from "express";
import auth from "../../middlewares/auth";
import { PetController } from "./controller.pet";
import validateRequest from "../../middlewares/validateRequest";
import { petValidationSchemas } from "./validation.pet";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.get("/", auth(), PetController.getAllFromDB);

router.post(
  "/",
  auth(UserRole.ADMIN),
  validateRequest(petValidationSchemas.createPetValidationSchema),
  PetController.createPet
);

router.patch(
  "/:petId",
  auth(UserRole.ADMIN),
  validateRequest(petValidationSchemas.updatePetValidationSchema),
  PetController.updateIntoDB
);

router.delete("/:petId", auth(UserRole.ADMIN), PetController.deleteFromDB);

export const petRoutes = router;
