import { ZodTypeAny } from "zod";
import { Request, Response, NextFunction } from "express";
import format from "pg-format";
import { client } from "../database";

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
    console.log("user");
  }

  return next();
};

export { verifyAdmin };
