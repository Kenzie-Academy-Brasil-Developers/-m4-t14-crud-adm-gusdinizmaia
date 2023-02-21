import format from "pg-format";
import { client } from "../../database";
import { userWithoutPassword } from "../../schemas/user.schemas";

const getUserService = async (id: number) => {
  const queryString = format(
    `
    select * from users u
    where u.id = %s
  `,
    id
  );

  const queryResult = await client.query(queryString);
  const userReturn = userWithoutPassword.parse(queryResult.rows[0]);

  return userReturn;
};

export { getUserService };
