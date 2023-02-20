import { Router } from "express";

const userRouter = Router();

userRouter.post("");
userRouter.get("");
userRouter.get("/profile");
userRouter.patch("/:id");
userRouter.delete("/:id");
userRouter.put("/:id/recover");

export { userRouter };
