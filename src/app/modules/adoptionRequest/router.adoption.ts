import express from "express";
import auth from "../../middlewares/auth";
import { AdoptionController } from "./controller.adoption";
import validateRequest from "../../middlewares/validateRequest";
import { adoptionValidationSchemas } from "./validation.adoption";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.patch(
  "/:requestId",
  auth(UserRole.ADMIN),
  validateRequest(adoptionValidationSchemas.updateAdoptionValidationSchema),
  AdoptionController.updateIntoDB
);
router.delete(
  "/:requestId",
  auth(UserRole.ADMIN, UserRole.USER),
  AdoptionController.deleteIntoDB
);

router.get(
  "/",
  auth(UserRole.ADMIN, UserRole.USER),
  AdoptionController.getAllFromDB
);

router.post(
  "/",
  auth(UserRole.ADMIN, UserRole.USER),
  validateRequest(adoptionValidationSchemas.createAdoptionValidationSchema),
  AdoptionController.createAdoptionRequest
);
export const adoptionRoutes = router;
