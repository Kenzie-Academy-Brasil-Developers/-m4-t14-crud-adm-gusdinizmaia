import { QueryResult } from "pg";
import { z } from "zod";
import {
  userSchema,
  userSchemaPatch,
  userSchemaCreate,
  userSchemaResult,
  usersSchemaResult,
} from "../schemas/user.schemas";

type iUser = z.infer<typeof userSchema>;
type iUserCreate = z.infer<typeof userSchemaCreate>;
type iUserPatch = z.infer<typeof userSchemaPatch>;
type iUserResult = z.infer<typeof userSchemaResult>;
type iUserQueryResult = QueryResult<iUserResult>;
type iUsersResult = z.infer<typeof usersSchemaResult>;
type iUsersQueryResult = QueryResult<iUsersResult>;

export {
  iUser,
  iUserPatch,
  iUserCreate,
  iUserResult,
  iUsersResult,
  iUserQueryResult,
  iUsersQueryResult,
};
