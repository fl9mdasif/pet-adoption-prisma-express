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
  };

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
  petId: string,
  data: { status: "PENDING" | "REJECTED" | "APPROVED" }
) => {
  await prisma.adoptionRequest.findUniqueOrThrow({
    where: {
      id,
    },
  });

  await prisma.$transaction(async (transactionClient) => {
    const updateAdoptionStatus = await transactionClient.adoptionRequest.update(
      {
        where: { id },
        data,
      }
    );

    // update the pet adoption status
    if (data.status === "APPROVED") {
      await transactionClient.pet.update({
        where: {
          id: petId,
        },
        data: {
          petAdoptionStatus: true,
        },
      });
    }

    return updateAdoptionStatus;
  });
};

const deleteIntoDB = async (id: string, petId: string) => {
  await prisma.adoptionRequest.findUniqueOrThrow({
    where: {
      id,
    },
  });

  await prisma.$transaction(async (transactionClient) => {
    const updateAdoptionStatus = await transactionClient.adoptionRequest.delete(
      {
        where: { id },
      }
    );

    // update the pet adoption status
    await transactionClient.pet.update({
      where: {
        id: petId,
      },
      data: {
        petAdoptionStatus: false,
      },
    });

    return updateAdoptionStatus;
  });
};

export const AdoptionService = {
  createAdoptionRequest,
  getAllFromDB,
  updateIntoDB,
  deleteIntoDB,
};
