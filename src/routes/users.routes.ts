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
import { userSchemaCreate, userSchemaPatch } from "../schemas/user.schemas";

const userRouter = Router();

userRouter.post(
  "",
  verifyData(userSchemaCreate),
  verifyEmail,
  postUserController
);
userRouter.get("", verifyToken, verifyAdmin, getAllUsersController);
userRouter.get("/profile", verifyToken, getUserController);
userRouter.patch(
  "/:id",
  verifyUserExist,
  verifyToken,
  verifyAdminPermission,
  verifyData(userSchemaPatch),
  verifyEmail,
  patchUserController
);
userRouter.delete(
  "/:id",
  verifyUserExist,
  verifyToken,
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
