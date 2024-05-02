import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request, Response } from "express";
import { AuthServices } from "./service.auth";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.loginUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Logged in successfully!",
    data: {
      id: result.id,
      name: result.name,
      email: result.email,
      accessToken: result.accessToken,
    },
  });
});

export const AuthController = {
  loginUser,
};
