import { Router } from "express";
import { postLoginController } from "../controllers/login.controllers";
import { verifyData } from "../middlewares/verifyData.middlewares";
import { userLogin } from "../schemas/login.schema";

const loginRouter = Router();

loginRouter.post("", verifyData(userLogin), postLoginController);

export { loginRouter };
