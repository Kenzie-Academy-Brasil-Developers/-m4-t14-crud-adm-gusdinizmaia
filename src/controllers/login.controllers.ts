import { Response, Request } from "express";
import { postLoginService } from "../services/login/loginUser.service";

const postLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = await postLoginService(req.body);

  return res.status(200).json(token);
};

export { postLoginController };
