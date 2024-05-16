"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const controller_user_1 = require("./controller.user");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const validation_user_1 = require("./validation.user");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(validation_user_1.userValidationSchema.UserRegSchema), controller_user_1.userController.createUser);
exports.userRouter = router;
