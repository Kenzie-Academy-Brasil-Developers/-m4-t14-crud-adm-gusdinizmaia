import { z } from "zod";

const userSchema = z.object({
  name: z.string().max(20),
  email: z.string().email({ message: "Invalid email" }).max(100),
  password: z.string(),
  admin: z.boolean().optional(),
  active: z.boolean().optional(),
});

const resultUserSchema = userSchema.extend({
  id: z.number(),
});

const userWithoutPassword = resultUserSchema.omit({ password: true });

export { userSchema, resultUserSchema, userWithoutPassword };
