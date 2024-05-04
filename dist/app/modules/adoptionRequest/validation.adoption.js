"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adoptionValidationSchemas = void 0;
const zod_1 = require("zod");
const createAdoptionValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string().optional(),
        userId: zod_1.z.string().optional(),
        petId: zod_1.z.string({
            required_error: "petId is required!",
        }),
        status: zod_1.z.enum(["PENDING", "REJECTED", "APPROVED"]).default("PENDING"),
        petOwnershipExperience: zod_1.z.string({
            required_error: "petOwnershipExperience is required!",
        }),
        createdAt: zod_1.z.string().optional(),
        updatedAt: zod_1.z.string().optional(),
    }),
});
const updateAdoptionValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.enum(["PENDING", "REJECTED", "APPROVED"]).optional(),
        petOwnershipExperience: zod_1.z.string().optional(),
    }),
});
exports.adoptionValidationSchemas = {
    createAdoptionValidationSchema,
    updateAdoptionValidationSchema,
};
