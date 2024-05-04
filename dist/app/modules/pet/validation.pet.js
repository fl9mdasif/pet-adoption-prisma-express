"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.petValidationSchemas = void 0;
const zod_1 = require("zod");
const update = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        contactNumber: zod_1.z.string().optional(),
    }),
});
const createPetValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string().optional(),
        name: zod_1.z.string(),
        species: zod_1.z.string(),
        breed: zod_1.z.string(),
        age: zod_1.z.number().int(),
        size: zod_1.z.string(),
        location: zod_1.z.string(),
        description: zod_1.z.string(),
        temperament: zod_1.z.string(),
        medicalHistory: zod_1.z.string(),
        adoptionRequirements: zod_1.z.string(),
        createdAt: zod_1.z.string().optional(),
        updatedAt: zod_1.z.string().optional(),
    }),
});
const updatePetValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        species: zod_1.z.string().optional(),
        breed: zod_1.z.string().optional(),
        age: zod_1.z.number().int().optional(),
        size: zod_1.z.string().optional(),
        location: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        temperament: zod_1.z.string().optional(),
        medicalHistory: zod_1.z.string().optional(),
        adoptionRequirements: zod_1.z.string().optional(),
        createdAt: zod_1.z.string().optional(),
        updatedAt: zod_1.z.string().optional(),
    }),
});
exports.petValidationSchemas = {
    createPetValidationSchema,
    updatePetValidationSchema,
};
