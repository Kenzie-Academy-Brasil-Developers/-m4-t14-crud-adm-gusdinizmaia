import { Request, Response, NextFunction } from "express";
import format from "pg-format";
import { client } from "../database";
import { AppError } from "../errors/appError";

const verifyUserActive = async (
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

  if (queryResult.rows[0].active) {
    throw new AppError("User already active", 400);
  }

  return next();
};

export { verifyUserActive };
