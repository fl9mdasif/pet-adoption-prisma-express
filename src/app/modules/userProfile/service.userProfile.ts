import prisma from "../../../shared/prisma";
import { TUserData } from "../user/interface.user";

const getMyProfile = async (id: string): Promise<TUserData | null> => {
  await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return result;
};

const updateMyProfile = async (
  id: string,
  data: Partial<TUserData>
): Promise<TUserData> => {
  await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const result = await prisma.user.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return result;
};

export const UserProfileService = {
  getMyProfile,
  updateMyProfile,
};
