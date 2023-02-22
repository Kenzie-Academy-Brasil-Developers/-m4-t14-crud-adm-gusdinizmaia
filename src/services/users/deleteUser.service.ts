import format from "pg-format";
import { client } from "../../database";

const deleteUserService = async (id: number) => {
  const queryString = format(
    `
      delete from users 
      where id = %s
  `,
    id
  );

  await client.query(queryString);

  return;
};

export { deleteUserService };
