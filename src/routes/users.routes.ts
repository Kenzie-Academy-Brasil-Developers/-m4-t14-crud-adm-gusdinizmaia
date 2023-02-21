import { Router } from "express";
import {
  deleteUserController,
  getAllUsersController,
  getUserController,
  patchUserController,
  postUserController,
  putUserController,
} from "../controllers/users.controllers";
import { verifyData } from "../middlewares/verifyData.Middlewares";
import { userSchema } from "../schemas/user.schemas";

const userRouter = Router();

userRouter.post("", verifyData(userSchema), postUserController);
userRouter.get("", getAllUsersController);
userRouter.get("/profile", getUserController);
userRouter.patch("/:id", patchUserController);
userRouter.delete("/:id", deleteUserController);
userRouter.put("/:id/recover", putUserController);

export { userRouter };
