"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adoptionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const controller_adoption_1 = require("./controller.adoption");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const validation_adoption_1 = require("./validation.adoption");
const router = express_1.default.Router();
router.get("/", (0, auth_1.default)(), controller_adoption_1.AdoptionController.getAllFromDB);
router.post("/", (0, auth_1.default)(), (0, validateRequest_1.default)(validation_adoption_1.adoptionValidationSchemas.createAdoptionValidationSchema), controller_adoption_1.AdoptionController.createAdoptionRequest);
router.patch("/:requestId", (0, auth_1.default)(), (0, validateRequest_1.default)(validation_adoption_1.adoptionValidationSchemas.updateAdoptionValidationSchema), controller_adoption_1.AdoptionController.updateIntoDB);
exports.adoptionRoutes = router;
