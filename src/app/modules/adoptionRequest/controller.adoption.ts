import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AdoptionService } from "./service.adoption";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { petFilterableFields } from "./constant.adoption";

const createAdoptionRequest = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await AdoptionService.createAdoptionRequest(
      req.body,
      req.user
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Adoption request submitted successfully",
      data: result,
    });
  }
);

const getAllFromDB = catchAsync(async (req, res, next) => {
  const result = await AdoptionService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Adoption requests retrieved successfully",

    data: result.data,
  });
});

// const getByIdFromDB = catchAsync(async (req, res, next) => {
//   const { id } = req.params;

//   const result = await AdminService.getByIdFromDB(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Admin data fetched by id!",
//     data: result,
//   });
// });

const updateIntoDB = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const result = await AdoptionService.updateIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Pet profile updated successfully",
    data: result,
  });
});

// const deleteFromDB = catchAsync(async (req, res, next) => {
//   const { id } = req.params;

//   const result = await AdminService.deleteFromDB(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Admin data deleted!",
//     data: result,
//   });
// });

// const softDeleteFromDB = catchAsync(async (req, res, next) => {
//   const { id } = req.params;

//   const result = await AdminService.softDeleteFromDB(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Admin data deleted!",
//     data: result,
//   });
// });

export const AdoptionController = {
  getAllFromDB,
  //   getByIdFromDB,
  updateIntoDB,
  //   deleteFromDB,
  //   softDeleteFromDB,

  createAdoptionRequest,
};
