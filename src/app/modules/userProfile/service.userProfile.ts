import prisma from "../../../shared/prisma";
import { TUserData } from "./interface.userProfile";

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
      role: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return result;
};

// my adoptions
const myAdoptions = async (id: string): Promise<any | null> => {
  const res = await prisma.adoptionRequest.findMany({
    where: {
      userId: id,
    },
  });

  // console.log(res);

  return res;
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
      role: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return result;
};

export const UserProfileService = {
  getMyProfile,
  updateMyProfile,
  myAdoptions,
};
