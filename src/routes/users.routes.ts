import { Router } from "express";
import {
  deleteUserController,
  getAllUsersController,
  getUserController,
  patchUserController,
  postUserController,
  putUserController,
} from "../controllers/users.controllers";
import { verifyAdmin } from "../middlewares/verifyAdmin.middlewares";
import { verifyData } from "../middlewares/verifyData.middlewares";
import { verifyEmail } from "../middlewares/verifyEmail.middlewares";
import { verifyToken } from "../middlewares/verifyToken.middlewares";
import { userSchema } from "../schemas/user.schemas";

const userRouter = Router();

userRouter.post("", verifyData(userSchema), verifyEmail, postUserController);
userRouter.get("", verifyToken, verifyAdmin, getAllUsersController);
userRouter.get("/profile", verifyToken, getUserController);
userRouter.patch(
  "/:id",
  verifyToken,
  verifyData(userSchema),
  verifyEmail,
  patchUserController
);
userRouter.delete("/:id", verifyToken, deleteUserController);
userRouter.put("/:id/recover", verifyToken, verifyAdmin, putUserController);

export { userRouter };
