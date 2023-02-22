import { z } from "zod";
import {
  resultUserSchema,
  userSchema,
  userSchemaOptional,
} from "../schemas/user.schemas";

type iUser = z.infer<typeof userSchema>;
type iResultUser = z.infer<typeof resultUserSchema>;
type iUserOptional = z.infer<typeof userSchemaOptional>;

export { iUser, iResultUser, iUserOptional };
