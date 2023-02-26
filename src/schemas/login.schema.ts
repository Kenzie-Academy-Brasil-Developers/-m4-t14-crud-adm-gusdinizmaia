import { z } from "zod";

const userLogin = z.object({
  email: z.string().email({ message: "Invalid email" }).max(100),
  password: z.string().max(250),
});

export { userLogin };
