import { Response, Request } from "express";
import { postLoginService } from "../services/login/loginUser.service";

const postLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await postLoginService(req.body);

  return res.status(201).json(data);
};

export { postLoginController };
