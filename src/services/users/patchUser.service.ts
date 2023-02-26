import format from "pg-format";
import { client } from "../../database";
import {
  iUserPatch,
  iUserQueryResult,
  iUserResult,
} from "../../interfaces/users.interface";
import { userSchemaResult } from "../../schemas/user.schemas";

const patchUserService = async (user: iUserPatch, id: number) => {
  const columns = Object.keys(user);
  const values = Object.values(user);

  const queryString: string = format(
    `
      update users
      set (%I) = row(%L)
      where id = %s
      returning *
  `,
    columns,
    values,
    id
  );

  const queryResult: iUserQueryResult = await client.query(queryString);

  const newUser: iUserResult = userSchemaResult.parse(queryResult.rows[0]);

  return newUser;
};

export { patchUserService };
