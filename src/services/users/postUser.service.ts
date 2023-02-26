import format from "pg-format";
import { client } from "../../database";
import {
  iUserResult,
  iUserQueryResult,
  iUserPatch,
} from "../../interfaces/users.interface";
import { userSchemaResult } from "../../schemas/user.schemas";

const postUserService = async (user: iUserPatch) => {
  const columns = Object.keys(user);
  const values = Object.values(user);

  const queryString: string = format(
    `
      insert into users as u (%I) values (%L)
      returning *;
    `,
    columns,
    values
  );

  const queryResult: iUserQueryResult = await client.query(queryString);

  const newUser: iUserResult = userSchemaResult.parse(queryResult.rows[0]);

  return newUser;
};

export { postUserService };
