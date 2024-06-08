import { z } from "zod";

const createAdoptionValidationSchema = z.object({
  body: z.object({
    id: z.string().optional(),
    userId: z.string().optional(),
    petId: z.string({
      required_error: "petId is required!",
    }),
    status: z.enum(["PENDING", "REJECTED", "APPROVED"]).default("PENDING"),
    petOwnershipExperience: z.string({
      required_error: "petOwnershipExperience is required!",
    }),
    petLocation: z.string().optional(),
    requesterContactNo: z.string().optional(),
    requesterName: z.string().optional(),
    requesterEmail: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  }),
});

const updateAdoptionValidationSchema = z.object({
  body: z.object({
    status: z.enum(["PENDING", "REJECTED", "APPROVED"]).optional(),
    requesterContactNo: z.string().optional(),
    petOwnershipExperience: z.string().optional(),
  }),
});

export const adoptionValidationSchemas = {
  createAdoptionValidationSchema,
  updateAdoptionValidationSchema,
};
