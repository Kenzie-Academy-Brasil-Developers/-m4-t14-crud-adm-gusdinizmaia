import format from "pg-format";
import { client } from "../../database";
import {
  iUserQueryResult,
  iUserResult,
} from "../../interfaces/users.interface";
import { userSchemaResult } from "../../schemas/user.schemas";

const putUserService = async (id: number) => {
  const queryString: string = format(
    `
      update users
      set active = true
      where id = %s
      returning *
  `,
    id
  );

  const queryResult: iUserQueryResult = await client.query(queryString);

  const newUser: iUserResult = userSchemaResult.parse(queryResult.rows[0]);

  return newUser;
};

export { putUserService };
