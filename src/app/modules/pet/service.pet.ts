import { Prisma } from "@prisma/client";
import { paginationHelper } from "../../../helpers/paginationHelper";
import prisma from "../../../shared/prisma";
import { TPaginationOptions } from "../../interface/pagination";
import { TPetFilterableFields, TPets } from "./interface.pet";
import { petSearchAbleFields } from "./constant.pet";

const createPet = async (data: any) => {
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

const updateIntoDB = async (
  id: string,
  data: Partial<TPets>
): Promise<TPets> => {
  await prisma.pet.findUniqueOrThrow({
    where: {
      id,
      // isDeleted: false,
    },
  });

  const result = await prisma.pet.update({
    where: {
      id,
    },
    data,
  });

  return result;
};

export const PetService = {
  createPet,
  getAllFromDB,
  updateIntoDB,
};
