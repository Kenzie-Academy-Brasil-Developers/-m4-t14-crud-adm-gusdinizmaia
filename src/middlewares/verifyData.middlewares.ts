import { ZodTypeAny } from "zod";
import { Request, Response, NextFunction } from "express";

const verifyData =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validateData = schema.parse(req.body);
    req.body = validateData;

    return next();
  };

export { verifyData };
