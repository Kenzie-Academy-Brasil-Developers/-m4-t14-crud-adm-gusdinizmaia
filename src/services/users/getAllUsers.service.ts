import { client } from "../../database";
import {
  iUsersQueryResult,
  iUsersResult,
} from "../../interfaces/users.interface";
import { usersSchemaResult } from "../../schemas/user.schemas";

const getAllUsersService = async () => {
  const queryString: string = `
    select * from users u;
  `;

  const queryResult: iUsersQueryResult = await client.query(queryString);

  const users: iUsersResult = usersSchemaResult.parse(queryResult.rows);

  return users;
};

export { getAllUsersService };
