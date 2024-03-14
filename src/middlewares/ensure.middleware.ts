import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";

class EnsureMiddlaware {
  validateBody =
    (schema: AnyZodObject) =>
    async ({ body }: Request, _: Response, next: NextFunction): Promise<void> => {
      body = await schema.parseAsync(body);

      return next();
    };

  carIdExists = async (
    { body: { id } }: Request,
    _: Response,
    next: NextFunction
  ): Promise<void> => {
    if (!id) {
      return next();
    }

    const car = await prisma.car.findFirst({
      where: { id },
    });

    if (!car) {
      throw new AppError(404, "Car not found");
    }

    return next();
  };
}

export const ensureMiddleware = new EnsureMiddlaware();
