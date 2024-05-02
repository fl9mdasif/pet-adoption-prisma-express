// import { Admin, Prisma, UserStatus } from "@prisma/client";
// import { paginationHelper } from "../../../helpers/paginationHelper";
// import { adminSearchAbleFields } from "./constant.admin";
// import prisma from "../../../shared/prisma";
// import { TAdminFilterRequest } from "./interface.admin";
// import { TPaginationOptions } from "../../interface/pagination";

// const getAllFromDB = async (
//   params: TAdminFilterRequest,
//   options: TPaginationOptions
// ) => {
//   const { page, limit, skip } = paginationHelper.calculatePagination(options);
//   const { searchTerm, ...filterData } = params;

//   const andConditions: Prisma.AdminWhereInput[] = [];

//   //console.log(filterData);
//   if (params.searchTerm) {
//     andConditions.push({
//       OR: adminSearchAbleFields.map((field) => ({
//         [field]: {
//           contains: params.searchTerm,
//           mode: "insensitive",
//         },
//       })),
//     });
//   }

//   if (Object.keys(filterData).length > 0) {
//     andConditions.push({
//       AND: Object.keys(filterData).map((key) => ({
//         [key]: {
//           equals: (filterData as any)[key],
//         },
//       })),
//     });
//   }

//   andConditions.push({
//     isDeleted: false,
//   });

//   //console.dir(andConditions, { depth: 'infinity' })
//   const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };

//   const result = await prisma.admin.findMany({
//     where: whereConditions,
//     skip,
//     take: limit,
//     orderBy:
//       options.sortBy && options.sortOrder
//         ? {
//             [options.sortBy]: options.sortOrder,
//           }
//         : {
//             createdAt: "desc",
//           },
//   });

//   const total = await prisma.admin.count({
//     where: whereConditions,
//   });

//   return {
//     meta: {
//       page,
//       limit,
//       total,
//     },
//     data: result,
//   };
// };

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

// export const AdminService = {
//   getAllFromDB,
//   getByIdFromDB,
//   updateIntoDB,
//   deleteFromDB,
//   softDeleteFromDB,
// };
