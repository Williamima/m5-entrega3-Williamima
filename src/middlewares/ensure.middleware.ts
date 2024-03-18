import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";
import { carCreateSchema } from "../schemas";
import { container } from "tsyringe";

class EnsureMiddlaware {
  validateBody =
    (schema: AnyZodObject) =>
    (req: Request, _: Response, next: NextFunction): void => {
        req.body = schema.parse(req.body);
        
        return next();
    };
  carIdExists = async (
    { params }: Request,
    _: Response,
    next: NextFunction
  ): Promise<void> => {

    const id = params.id;
    
    if (!id) {
      return next();
    }

    const car = await prisma.car.findUnique({
      where: { id },
    });

    if (!car) {
      throw new AppError(404, "Car not found.");
    }

    return next();
  };
}

export const ensureMiddleware = container.resolve(EnsureMiddlaware);
