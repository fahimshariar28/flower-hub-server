import catchAsyncFunc from "../../utils/catchAsyncFunc";
import sendResponseMessage from "../../utils/sendResponse";
import { AuthServices } from "./auth.services";

const loginUser = catchAsyncFunc(async (req, res) => {
  const user = await AuthServices.userLogin(req.body);
  const { email, accessToken, jwtPayload } = user;
  const userData = { ...jwtPayload, email };
  sendResponseMessage(res, {
    success: true,
    statusCode: 200,
    message: "User log in successful",
    data: {
      user: userData,
      token: accessToken,
    },
  });
});

export const AuthControllers = {
  loginUser,
};
