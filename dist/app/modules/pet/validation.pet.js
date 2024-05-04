"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.petValidationSchemas = void 0;
const zod_1 = require("zod");
const createPetValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "name is required!",
        }),
        species: zod_1.z.string({
            required_error: "species is required!",
        }),
        breed: zod_1.z.string({
            required_error: "breed is required!",
        }),
        age: zod_1.z
            .number({
            required_error: "age is required!",
        })
            .int(),
        size: zod_1.z.string({
            required_error: "size is required!",
        }),
        location: zod_1.z.string({
            required_error: "location is required!",
        }),
        description: zod_1.z
            .string({
            required_error: "description is required!",
        })
            .optional(),
        temperament: zod_1.z
            .string({
            required_error: "temperament is required!",
        })
            .optional(),
        medicalHistory: zod_1.z
            .string({
            required_error: "medicalHistory is required!",
        })
            .optional(),
        adoptionRequirements: zod_1.z
            .string({
            required_error: "adoptionRequirements is required!",
        })
            .optional(),
        createdAt: zod_1.z
            .string({
            required_error: "createdAt is required!",
        })
            .optional(),
        updatedAt: zod_1.z
            .string({
            required_error: "updatedAt is required!",
        })
            .optional(),
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
