import * as bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";

const createUser = async (data: any) => {
  const hashPassword = await bcrypt.hash(data.password, 12);

  const userData = {
    name: data?.name,
    email: data?.email,
    password: hashPassword,
  };

  const createUser = await prisma.user.create({
    data: userData,
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return createUser;
};

export const userService = {
  createUser,
};
