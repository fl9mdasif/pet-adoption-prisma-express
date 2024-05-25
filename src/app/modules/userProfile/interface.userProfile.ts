import { UserRole, UserStatus } from "@prisma/client";

export interface TUserData {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
}
