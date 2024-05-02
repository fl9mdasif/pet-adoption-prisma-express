import { Prisma } from "@prisma/client";
import { paginationHelper } from "../../../helpers/paginationHelper";
import prisma from "../../../shared/prisma";
import { TPaginationOptions } from "../../interface/pagination";
import { TPetFilterableFields } from "./interface.pet";
import { petSearchAbleFields } from "./constant.pet";

const createPet = async (data: any) => {
  //   console.log({ data });

  const createPet = await prisma.pet.create({
    data,
  });

  return createPet;
};

const getAllFromDB = async (
  params: TPetFilterableFields,
  options: TPaginationOptions
) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.PetWhereInput[] = [];

  //console.log(filterData);
  if (params.searchTerm) {
    andConditions.push({
      OR: petSearchAbleFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
          mode: "insensitive",
        },
      })),
    });
  }

  //   andConditions.push({
  //     isDeleted: false,
  //   });

  //console.dir(andConditions, { depth: 'infinity' })
  const whereConditions: Prisma.PetWhereInput = { AND: andConditions };

  const result = await prisma.pet.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: "desc",
          },
  });

  const total = await prisma.pet.count({
    where: whereConditions,
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
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

// const updateIntoDB = async (
//   id: string,
//   data: Partial<Admin>
// ): Promise<Admin> => {
//   await prisma.admin.findUniqueOrThrow({
//     where: {
//       id,
//       isDeleted: false,
//     },
//   });

//   const result = await prisma.admin.update({
//     where: {
//       id,
//     },
//     data,
//   });

//   return result;
// };

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

export const PetService = {
  createPet,
  getAllFromDB,
  //   getByIdFromDB,
  //   updateIntoDB,
  //   deleteFromDB,
  //   softDeleteFromDB,
};
