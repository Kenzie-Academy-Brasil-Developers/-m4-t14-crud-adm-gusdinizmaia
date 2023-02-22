import format from "pg-format";
import { client } from "../../database";
import { iUserOptional } from "../../interfaces/users.interface";

const patchUserService = async (user: iUserOptional, id: number) => {
  const columns = Object.keys(user);
  const values = Object.values(user);

  const queryString = format(
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

  const queryResult = await client.query(queryString);

  return queryResult.rows[0];
};

export { patchUserService };
