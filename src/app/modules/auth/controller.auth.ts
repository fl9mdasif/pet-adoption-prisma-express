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

// const refreshToken = catchAsync(async (req: Request, res: Response) => {
//   const { refreshToken } = req.cookies;

//   const result = await AuthServices.refreshToken(refreshToken);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Logged in successfully!",
//     data: result,
//     // data: {
//     //     accessToken: result.accessToken,
//     //     needPasswordChange: result.needPasswordChange
//     // }
//   });
// });

// const changePassword = catchAsync(
//   async (req: Request & { user?: any }, res: Response) => {
//     const user = req.user;
//     console.log(user);

//     const result = await AuthServices.changePassword(user, req.body);

//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: "Password Changed successfully",
//       data: result,
//     });
//   }
// );

// const forgotPassword = catchAsync(async (req: Request, res: Response) => {
//   await AuthServices.forgotPassword(req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Check your email!",
//     data: null,
//   });
// });

// const resetPassword = catchAsync(async (req: Request, res: Response) => {
//   const token = req.headers.authorization || "";

//   await AuthServices.resetPassword(token, req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Password Reset!",
//     data: null,
//   });
// });

export const AuthController = {
  loginUser,
  //   refreshToken,
  //   changePassword,
  //   forgotPassword,
  //   resetPassword,
};
