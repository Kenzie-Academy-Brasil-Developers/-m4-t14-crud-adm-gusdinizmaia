import { client } from "../../database";

const getAllUsersService = async () => {
  const queryString = `
    select u.id, u.name, u.email, u.admin, u.active from users u;
  `;

  const queryResult = await client.query(queryString);

  return queryResult.rows;
};

export { getAllUsersService };
