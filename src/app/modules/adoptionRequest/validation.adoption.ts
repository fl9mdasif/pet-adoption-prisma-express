import { z } from "zod";

const update = z.object({
  body: z.object({
    name: z.string().optional(),
    contactNumber: z.string().optional(),
  }),
});

const createAdoptionValidationSchema = z.object({
  body: z.object({
    id: z.string().optional(),
    userId: z.string().optional(),
    petId: z.string(),
    status: z.enum(["PENDING", "REJECTED", "APPROVED"]).default("PENDING"),
    petOwnershipExperience: z.string(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  }),
});

const updateAdoptionValidationSchema = z.object({
  body: z.object({
    status: z.enum(["PENDING", "REJECTED", "APPROVED"]),
    petOwnershipExperience: z.string().optional(),
  }),
});

export const adoptionValidationSchemas = {
  createAdoptionValidationSchema,
  updateAdoptionValidationSchema,
};
