import express from "express";
import auth from "../../middlewares/auth";
import { AdoptionController } from "./controller.adoption";
import validateRequest from "../../middlewares/validateRequest";
import { adoptionValidationSchemas } from "./validation.adoption";

const router = express.Router();

router.get("/", auth(), AdoptionController.getAllFromDB);

router.post(
  "/",
  auth(),
  validateRequest(adoptionValidationSchemas.createAdoptionValidationSchema),
  AdoptionController.createAdoptionRequest
);

router.patch(
  "/:requestId",
  auth(),
  validateRequest(adoptionValidationSchemas.updateAdoptionValidationSchema),
  AdoptionController.updateIntoDB
);

export const adoptionRoutes = router;
