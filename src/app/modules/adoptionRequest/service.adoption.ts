import prisma from "../../../shared/prisma";

const createAdoptionRequest = async (payload: any, user: any) => {
  const pet = await prisma.pet.findUniqueOrThrow({
    where: {
      id: payload.petId,
    },
  });

  // console.log("pet", pet);

  const adoptionRequestData = {
    ...payload,
    petName: pet?.name,
    petLocation: pet?.location,
    photo: pet?.photo,
    userId: user?.id,
    requesterName: user?.name,
    requesterEmail: user?.email,

    // requesterContactNo: payload?.requesterContactNo,
  };
  console.log("adop", adoptionRequestData);

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
