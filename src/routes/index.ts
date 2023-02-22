import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.middlewares";
import { loginRouter } from "./login.routes";
import { userRouter } from "./users.routes";

const router = Router();

router.use("/login", loginRouter);
router.use("/users", userRouter);

export { router };
