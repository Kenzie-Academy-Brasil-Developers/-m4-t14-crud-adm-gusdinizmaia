import { z } from "zod";
import { resultUserSchema, userSchema } from "../schemas/user.schemas";

type iUser = z.infer<typeof userSchema>;
type iResultUser = z.infer<typeof resultUserSchema>;
export { iUser, iResultUser };
