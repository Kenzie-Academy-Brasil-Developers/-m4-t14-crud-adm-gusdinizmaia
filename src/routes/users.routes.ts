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
import { verifyAdminPermission } from "../middlewares/verifyAdminPermission.middlewares";
import { verifyData } from "../middlewares/verifyData.middlewares";
import { verifyEmail } from "../middlewares/verifyEmail.middlewares";
import { verifyToken } from "../middlewares/verifyToken.middlewares";
import { verifyUserActive } from "../middlewares/verifyUserActive.middlewares";
import { verifyUserExist } from "../middlewares/verifyUserExist.middlewares";
import { userSchema, userSchemaOptional } from "../schemas/user.schemas";

const userRouter = Router();

userRouter.post("", verifyData(userSchema), verifyEmail, postUserController);
userRouter.get("", verifyToken, verifyAdmin, getAllUsersController);
userRouter.get("/profile", verifyToken, getUserController);
userRouter.patch(
  "/:id",
  verifyUserExist,
  verifyToken,
  verifyAdminPermission,
  verifyData(userSchemaOptional),
  verifyEmail,
  patchUserController
);
userRouter.delete(
  "/:id",
  verifyUserExist,
  verifyToken,
  verifyAdminPermission,
  verifyAdminPermission,
  deleteUserController
);
userRouter.put(
  "/:id/recover",
  verifyUserExist,
  verifyToken,
  verifyAdmin,
  verifyUserActive,
  putUserController
);

export { userRouter };
