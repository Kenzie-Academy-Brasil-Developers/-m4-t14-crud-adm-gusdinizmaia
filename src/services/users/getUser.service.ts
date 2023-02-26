import format from "pg-format";
import { client } from "../../database";
import {
  iUserQueryResult,
  iUserResult,
} from "../../interfaces/users.interface";
import { userSchemaResult } from "../../schemas/user.schemas";

const getUserService = async (id: number) => {
  const queryString: string = format(
    `
    select * from users u
    where u.id = %s
  `,
    id
  );

  const queryResult: iUserQueryResult = await client.query(queryString);
  const userReturn: iUserResult = userSchemaResult.parse(queryResult.rows[0]);

  return userReturn;
};

export { getUserService };
