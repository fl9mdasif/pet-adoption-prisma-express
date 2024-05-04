"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.petRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const controller_pet_1 = require("./controller.pet");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const validation_pet_1 = require("./validation.pet");
const router = express_1.default.Router();
router.get("/", (0, auth_1.default)(), controller_pet_1.PetController.getAllFromDB);
router.post("/", (0, auth_1.default)(), (0, validateRequest_1.default)(validation_pet_1.petValidationSchemas.createPetValidationSchema), controller_pet_1.PetController.createPet);
router.patch("/:petId", (0, auth_1.default)(), (0, validateRequest_1.default)(validation_pet_1.petValidationSchemas.updatePetValidationSchema), controller_pet_1.PetController.updateIntoDB);
exports.petRoutes = router;
