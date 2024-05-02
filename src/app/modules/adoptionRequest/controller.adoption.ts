import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AdoptionService } from "./service.adoption";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

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

const updateIntoDB = catchAsync(async (req, res, next) => {
  const { requestId } = req.params;

  const result = await AdoptionService.updateIntoDB(requestId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Adoption request updated successfully",
    data: result,
  });
});

export const AdoptionController = {
  getAllFromDB,
  updateIntoDB,
  createAdoptionRequest,
};
