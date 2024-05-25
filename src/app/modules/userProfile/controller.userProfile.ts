import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { UserProfileService } from "./service.userProfile";

const getMyProfile = catchAsync(
  async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
    const id = req.user?.id;

    const result = await UserProfileService.getMyProfile(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User profile retrieved successfully",
      data: result,
    });
  }
);
const myAdoptions = catchAsync(
  async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
    const id = req.user?.id;

    const result = await UserProfileService.myAdoptions(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "My Adoption request retrieved successfully",
      data: result,
    });
  }
);

const updateMyProfile = catchAsync(
  async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
    const userId = req.user?.id;

    const result = await UserProfileService.updateMyProfile(userId, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Pet profile updated successfully",
      data: result,
    });
  }
);

export const UserProfileController = {
  getMyProfile,
  updateMyProfile,
  myAdoptions,
};
