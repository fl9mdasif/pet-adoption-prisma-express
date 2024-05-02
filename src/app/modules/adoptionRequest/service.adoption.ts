import prisma from "../../../shared/prisma";

const createAdoptionRequest = async (data: any, user: any) => {
  console.log(data);

  const result = {
    ...data,
    userId: user.id,
  };
  console.log(result);

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

// const getByIdFromDB = async (id: string): Promise<Admin | null> => {
//   await prisma.admin.findUniqueOrThrow({
//     where: {
//       id,
//       isDeleted: false,
//     },
//   });

//   const result = await prisma.admin.findUnique({
//     where: {
//       id,
//       isDeleted: false,
//     },
//   });

//   return result;
// };

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

// const deleteFromDB = async (id: string): Promise<Admin | null> => {
//   await prisma.admin.findUniqueOrThrow({
//     where: {
//       id,
//     },
//   });

//   const result = await prisma.$transaction(async (transactionClient) => {
//     // delete admin
//     const adminDeletedData = await transactionClient.admin.delete({
//       where: {
//         id,
//       },
//     });

//     await transactionClient.user.delete({
//       where: {
//         email: adminDeletedData.email,
//       },
//     });

//     return adminDeletedData;
//   });

//   return result;
// };

// const softDeleteFromDB = async (id: string): Promise<Admin | null> => {
//   await prisma.admin.findUniqueOrThrow({
//     where: {
//       id,
//       isDeleted: false,
//     },
//   });

//   const result = await prisma.$transaction(async (transactionClient) => {
//     const adminDeletedData = await transactionClient.admin.update({
//       where: {
//         id,
//       },
//       data: {
//         isDeleted: true,
//       },
//     });

//     await transactionClient.user.update({
//       where: {
//         email: adminDeletedData.email,
//       },
//       data: {
//         status: UserStatus.DELETED,
//       },
//     });

//     return adminDeletedData;
//   });

//   return result;
// };

export const AdoptionService = {
  createAdoptionRequest,
  getAllFromDB,
  //   getByIdFromDB,
  updateIntoDB,
  //   deleteFromDB,
  //   softDeleteFromDB,
};
