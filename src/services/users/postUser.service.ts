import format from "pg-format";
import { client } from "../../database";
import { userWithoutPassword } from "../../schemas/user.schemas";

const postUserService = async (body: any) => {
  const columns = Object.keys(body);
  const values = Object.values(body);

  const queryString = format(
    `
      insert into users as u (%I) values (%L)
      returning *;
    `,
    columns,
    values
  );

  const queryResult = await client.query(queryString);
  const newUser = userWithoutPassword.parse(queryResult.rows[0]);

  return newUser;
};

export { postUserService };
