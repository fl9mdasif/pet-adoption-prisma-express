// import { PrismaClient, UserRole } from "@prisma/client";
// import * as bcrypt from "bcrypt";

// const prisma = new PrismaClient();

// const createAdmin = async (data: any) => {
//   // hashPassword
//   const hashPassword = await bcrypt.hash(data.password, 12);
//   // console.log({ hashPassword });

//   const userData = {
//     email: data?.admin?.email,
//     password: hashPassword,
//     role: UserRole.ADMIN,
//   };

//   // const result = await prisma.$transaction(async (transactionClient) => {
//   //   // create user
//   //   const createUser = await transactionClient.user.create({
//   //     data: userData,
//   //   });

//   //   // create admin
//   //   const createAdmin = await transactionClient.admin.create({
//   //     data: data.admin,
//   //   });
//   //   return createAdmin;
//   // });
//   return null;
// };

// export const userService = {
//   createAdmin,
// };
