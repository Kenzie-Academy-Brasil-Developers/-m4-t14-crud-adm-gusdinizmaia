import { z } from "zod";

const userSchema = z.object({
  name: z.string().max(20),
  email: z.string().max(100),
  password: z.string(),
  admin: z.boolean(),
  active: z.boolean(),
});

const resultUserSchema = userSchema.extend({
  id: z.number(),
});

const userWithoutPassword = resultUserSchema.omit({ password: true });

export { userSchema, resultUserSchema, userWithoutPassword };
