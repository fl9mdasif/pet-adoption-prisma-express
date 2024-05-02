import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import prisma from "../../../shared/prisma";
import * as bcrypt from "bcrypt";

const loginUser = async (payload: { email: string; password: string }) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
      // status: UserStatus.ACTIVE,
    },
  });

  const isCorrectPassword: boolean = await bcrypt.compare(
    payload.password,
    userData.password
  );

  if (!isCorrectPassword) {
    throw new Error("Password incorrect!");
  }
  const accessToken = jwtHelpers.generateToken(
    {
      id: userData.id,
      name: userData.name,
      email: userData.email,
    },
    config.jwt.jwt_secret as Secret,
    config.jwt.expires_in as string
    // "30d"
  );
  const result = {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    accessToken,
  };

  return result;
};

export const AuthServices = {
  loginUser,
};
