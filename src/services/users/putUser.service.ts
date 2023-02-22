import format from "pg-format";
import { client } from "../../database";

const putUserService = async (id: number) => {
  const queryString = format(
    `
      update users
      set active = true
      where id = %s
      returning *
  `,
    id
  );

  const queryResult = await client.query(queryString);

  return queryResult.rows[0];
};

export { putUserService };
