import { ROLE } from "./user.constant";

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: TRole;
};

export type TRole = keyof typeof ROLE;
