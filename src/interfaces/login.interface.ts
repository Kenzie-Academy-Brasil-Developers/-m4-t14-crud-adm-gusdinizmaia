import { userLogin } from "../schemas/login.schema";
import { z } from "zod";

type iUserLogin = z.infer<typeof userLogin>;

export { iUserLogin };
