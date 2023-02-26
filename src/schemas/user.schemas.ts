import { hashSync } from "bcryptjs";
import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(20),
  email: z.string().email({ message: "Invalid email" }).max(100),
  admin: z.boolean().optional(),
  active: z.boolean(),
  password: z
    .string()
    .max(250)
    .transform((pass) => hashSync(pass, 10)),
});

const userSchemaCreate = userSchema.omit({
  id: true,
  active: true,
});

const userSchemaPatch = userSchema
  .partial()
  .omit({ admin: true })
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

const userSchemaResult = userSchema.omit({ password: true });

const usersSchemaResult = z.array(userSchemaResult);

export {
  userSchema,
  userSchemaCreate,
  userSchemaPatch,
  userSchemaResult,
  usersSchemaResult,
};
