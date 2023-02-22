import { hashSync } from "bcryptjs";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().max(20),
  email: z.string().email({ message: "Invalid email" }).max(100),
  password: z
    .string()
    .max(250)
    .transform((pass) => hashSync(pass, 10)),
  admin: z.boolean().optional(),
  active: z.boolean().optional(),
});

const UserSchemaResult = userSchema.extend({
  id: z.number(),
});

const userWithoutPassword = UserSchemaResult.omit({ password: true });

const userSchemaOptional = userSchema
  .partial({
    name: true,
    email: true,
    password: true,
  })
  .superRefine((user, ctx) => {
    const keys = Object.keys(user);

    if (keys.length <= 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one user must be provided",
        path: ["keys"],
      });
    }
  });

export {
  userSchema,
  UserSchemaResult,
  userWithoutPassword,
  userSchemaOptional,
};
