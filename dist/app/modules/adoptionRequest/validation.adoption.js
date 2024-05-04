"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adoptionValidationSchemas = void 0;
const zod_1 = require("zod");
const update = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        contactNumber: zod_1.z.string().optional(),
    }),
});
const createAdoptionValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string().optional(),
        userId: zod_1.z.string().optional(),
        petId: zod_1.z.string(),
        status: zod_1.z.enum(["PENDING", "REJECTED", "APPROVED"]).default("PENDING"),
        petOwnershipExperience: zod_1.z.string(),
        createdAt: zod_1.z.string().optional(),
        updatedAt: zod_1.z.string().optional(),
    }),
});
const updateAdoptionValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.enum(["PENDING", "REJECTED", "APPROVED"]),
        petOwnershipExperience: zod_1.z.string().optional(),
    }),
});
exports.adoptionValidationSchemas = {
    createAdoptionValidationSchema,
    updateAdoptionValidationSchema,
};
