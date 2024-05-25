import prisma from "../../../shared/prisma";

const createAdoptionRequest = async (data: any, user: any) => {
  await prisma.pet.findFirstOrThrow({
    where: {
      id: data.petId,
    },
  });

  const pet = await prisma.pet.findUniqueOrThrow({
    where: {
      id: data.petId,
    },
  });

  // console.log("pet", pet);

  const adoptionRequestData = {
    ...data,
    petName: pet?.name,
    photo: pet?.photo[1],
    userId: user?.id,
    requesterName: user?.name,
    requesterEmail: user?.email,
    requesterContactNo: data?.requesterContactNo,
  };
  console.log(adoptionRequestData);

  const createAdoptionRequest = await prisma.adoptionRequest.create({
    data: adoptionRequestData,
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

const deleteIntoDB = async (id: string) => {
  await prisma.adoptionRequest.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const result = await prisma.adoptionRequest.delete({
    where: {
      id,
    },
  });

  return result;
};

export const AdoptionService = {
  createAdoptionRequest,
  getAllFromDB,
  updateIntoDB,
  deleteIntoDB,
};
