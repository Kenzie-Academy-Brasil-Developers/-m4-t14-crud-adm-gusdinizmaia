import { Request, Response, NextFunction } from "express";
import format from "pg-format";
import { client } from "../database";
import { AppError } from "../errors/appError";

const verifyUserExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: number = parseInt(req.params.id);

  const queryString = format(
    `
        select * from users
        where id = %s
    `,
    id
  );

  const queryResult = await client.query(queryString);

  if (!queryResult.rowCount) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export { verifyUserExist };
