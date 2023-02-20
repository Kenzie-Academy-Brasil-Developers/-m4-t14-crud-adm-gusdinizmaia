import { Response, Request } from "express";
import { loginUser } from "../services/login/loginUser.service";

const postLoginUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await loginUser();

  return res.status(201).json(data);
};
