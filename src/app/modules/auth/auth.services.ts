/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from "bcrypt";
import httpStatus from "http-status";
import config from "../../config";
import GenericError from "../../errors/genericError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import { createToken } from "./auth.utils";

const userLogin = async (payload: TLoginUser) => {
  // console.log(payload);
  const email = payload?.email;
  const isUserExists = await User.findOne({
    email: payload?.email,
  }).select("+password ");
  //   console.log(isUserExists);
  if (!isUserExists) {
    throw new GenericError(httpStatus.NOT_FOUND, "User not found");
  }
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    isUserExists?.password
  );
  //   console.log(isPasswordMatched);
  if (!isPasswordMatched) {
    throw new GenericError(httpStatus.UNAUTHORIZED, "Password not matched");
  }

  const jwtPayload = {
    id: isUserExists?._id.toString(),
    role: isUserExists?.role,
    email: isUserExists?.email,
    name: isUserExists?.name,
  };
  //   console.log(jwtPayload);

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );
  //   console.log(accessToken);
  return { email, jwtPayload, accessToken };
};

export const AuthServices = {
  userLogin,
};
