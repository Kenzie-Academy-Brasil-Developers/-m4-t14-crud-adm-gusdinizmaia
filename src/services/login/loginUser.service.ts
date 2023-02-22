import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { QueryResult } from "pg";
import format from "pg-format";
import "dotenv/config";
import { client } from "../../database";
import { AppError } from "../../errors/appError";
import { iUserLogin } from "../../interfaces/login.interface";
import { iResultUser } from "../../interfaces/users.interface";

const postLoginService = async (body: iUserLogin) => {
  const email = body.email;
  const password = body.password;

  const queryString = format(
    `
    select * from users
    where email = %L
  `,
    email
  );

  const queryResult: QueryResult<iResultUser> = await client.query(queryString);

  if (queryResult.rowCount === 0 || !queryResult.rows[0].active) {
    throw new AppError("Wrong email/password", 401);
  }

  const verifyPassword: boolean = await compare(
    password,
    queryResult.rows[0].password
  );

  if (!verifyPassword) {
    console.log(verifyPassword);
    throw new AppError("Wrong email/password", 401);
  }

  const token: string = jwt.sign(
    {
      email: queryResult.rows[0].email,
    },
    String(process.env.JWT_SECRET_KEY!),
    {
      expiresIn: "30m",
      subject: String(queryResult.rows[0].id),
    }
  );

  return {
    token: token,
  };
};

export { postLoginService };
