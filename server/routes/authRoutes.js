import { Router } from "express";
import { isAuthenticated, login, logout, register, resetPassword, sendResetOtp, sendVerifyOtp, verifyEmail } from "../controllers/auth.controller.js";
import userAuth from "../middleware/userAuth.js";

const authRouter = Router();

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);
authRouter.route("/logout").post(logout);
authRouter.route("/send-verify-otp").post(userAuth, sendVerifyOtp);
authRouter.route("/verify-account").post(userAuth, verifyEmail);
authRouter.route("/is-auth").post(userAuth, isAuthenticated);
authRouter.route("/send-reset-otp").post(sendResetOtp);
authRouter.route("/reset-password").post(resetPassword);

export default authRouter;