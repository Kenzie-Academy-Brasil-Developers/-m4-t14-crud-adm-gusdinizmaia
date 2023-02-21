import { Request, Response, NextFunction } from "express";
import format from "pg-format";
import { client } from "../database";
import { AppError } from "../errors/appError";

const verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;

  const queryString = format(
    `
        select * from users u
        where u.email = '%s'
    `,
    email
  );

  const queryResult = await client.query(queryString);

  if (queryResult.rowCount) {
    throw new AppError("E-mail already registered", 409);
  }

  return next();
};

export { verifyEmail };
