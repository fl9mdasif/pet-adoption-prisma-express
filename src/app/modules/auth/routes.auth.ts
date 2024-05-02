import express from "express";
import { AuthController } from "./controller.auth";

const router = express.Router();

router.post("/", AuthController.loginUser);

export const AuthRoutes = router;
