import { Router } from "express";
import { postLoginController } from "../controllers/login.controllers";

const loginRouter = Router();

loginRouter.post("", postLoginController);

export { loginRouter };
