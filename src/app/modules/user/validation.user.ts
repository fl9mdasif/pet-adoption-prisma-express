import { z } from "zod";

import prisma from "../../../shared/prisma";

const isUniqueEmail = async (field: string) => {
  // Check if email already exists in the database
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email: field }, { name: field }],
    },
  });

  // Return false if email already exists, true otherwise
  return !existingUser;
};

const UserRegSchema = z.object({
  body: z.object({
    id: z.string().optional(),
    name: z.string().refine(
      async (name) => {
        // Check uniqueness of email
        return await isUniqueEmail(name);
      },
      { message: "Name already exists" }
    ),
    email: z
      .string()
      .email()
      .refine(
        async (email) => {
          // Check uniqueness of email
          return await isUniqueEmail(email);
        },
        { message: "Email already exists" }
      ),
    password: z.string(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  }),
});

export const userValidationSchema = {
  UserRegSchema,
};
