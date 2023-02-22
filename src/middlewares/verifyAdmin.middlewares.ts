import { Request, Response, NextFunction } from "express";
import format from "pg-format";
import { client } from "../database";
import { AppError } from "../errors/appError";

const verifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.user.id;

  const queryString = format(
    `
        select * from users u
        where u.id = %s
    `,
    id
  );

  const queryResult = await client.query(queryString);

  if (!queryResult.rows[0].admin) {
    throw new AppError("Inssuficient Permissison", 403);
  }

  return next();
};

export { verifyAdmin };
