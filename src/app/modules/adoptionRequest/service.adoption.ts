import prisma from "../../../shared/prisma";

const createAdoptionRequest = async (data: any, user: any) => {
  await prisma.pet.findFirstOrThrow({
    where: {
      id: data.petId,
    },
  });

  const result = {
    ...data,
    userId: user.id,
  };

  const createAdoptionRequest = await prisma.adoptionRequest.create({
    data: result,
  });

  return createAdoptionRequest;
};

const getAllFromDB = async () => {
  const result = await prisma.adoptionRequest.findMany();

  return {
    data: result,
  };
};

const updateIntoDB = async (
  id: string,
  data: { status: "PENDING" | "REJECTED" | "APPROVED" }
) => {
  await prisma.adoptionRequest.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const result = await prisma.adoptionRequest.update({
    where: {
      id,
    },
    data,
  });

  return result;
};

export const AdoptionService = {
  createAdoptionRequest,
  getAllFromDB,
  updateIntoDB,
};
