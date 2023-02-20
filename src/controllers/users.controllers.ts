import { Response, Request } from "express";
import { deleteUserService } from "../services/users/deleteUser.service";
import { getAllUsersService } from "../services/users/getAllUsers.service";
import { getUserService } from "../services/users/getUser.service";
import { patchUserService } from "../services/users/patchUser.service";
import { postUserService } from "../services/users/postUser.service";
import { putUserService } from "../services/users/putUser.service";

const postUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await postUserService();

  return res.status(201).json(data);
};

const getAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await getAllUsersService();

  return res.status(201).json(data);
};

const getUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await getUserService();

  return res.status(201).json(data);
};

const patchUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await patchUserService();

  return res.status(201).json(data);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await deleteUserService();

  return res.status(201).json(data);
};

const putUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await putUserService();

  return res.status(201).json(data);
};

export {
  postUserController,
  getAllUsersController,
  getUserController,
  patchUserController,
  deleteUserController,
  putUserController,
};
