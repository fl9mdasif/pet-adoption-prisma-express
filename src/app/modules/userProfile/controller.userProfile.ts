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

const updateMyProfile = catchAsync(
  async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
    const userId = req.user?.id;

    const result = await UserProfileService.updateMyProfile(userId, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "My profile updated successfully",
      data: result,
    });
  }
);

const getAllUser = catchAsync(
  async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
    const result = await UserProfileService.getAllUser();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All users retrieved successfully",
      data: result,
    });
  }
);

const deleteUserFromDB = catchAsync(async (req, res, next) => {
  const { userId } = req.params;

  const result = await UserProfileService.deleteUserFromDB(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User deleted successfully",
    data: result,
  });
});

const updateUserByAdmin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params;
    console.log(userId);

    const result = await UserProfileService.updateUserByAdmin(userId, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User credentials updated successfully",
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

export const UserProfileController = {
  getMyProfile,
  updateMyProfile,
  myAdoptions,
  getAllUser,
  deleteUserFromDB,
  updateUserByAdmin,
};
