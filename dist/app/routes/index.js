"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { AuthRoutes } from "../modules/auth/routes.auth";
const router_user_1 = require("../modules/user/router.user");
const routes_auth_1 = require("../modules/auth/routes.auth");
const router_pet_1 = require("../modules/pet/router.pet");
const router_adoption_1 = require("../modules/adoptionRequest/router.adoption");
const router_userProfile_1 = require("../modules/userProfile/router.userProfile");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/register",
        route: router_user_1.userRouter,
    },
    {
        path: "/login",
        route: routes_auth_1.AuthRoutes,
    },
    {
        path: "/pets",
        route: router_pet_1.petRoutes,
    },
    {
        path: "/adoption-request",
        route: router_adoption_1.adoptionRoutes,
    },
    {
        path: "/profile",
        route: router_userProfile_1.UserProfileRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
