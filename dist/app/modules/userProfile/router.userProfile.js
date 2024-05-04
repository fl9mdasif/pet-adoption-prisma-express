"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const controller_userProfile_1 = require("./controller.userProfile");
const validation_userProfile_1 = require("./validation.userProfile");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = express_1.default.Router();
router.get("/", (0, auth_1.default)(), controller_userProfile_1.UserProfileController.getMyProfile);
router.patch("/", (0, auth_1.default)(), (0, validateRequest_1.default)(validation_userProfile_1.userProfileUpdateSchema), controller_userProfile_1.UserProfileController.updateMyProfile);
exports.UserProfileRoutes = router;
