import "reflect-metadata";
import { NextFunction, Request, Response } from "express";
import { ensureMiddleware } from "../../../middlewares";
import { carCreateMock, invalidateBodyMock } from "../../__mocks__";
import { prisma } from "../../../database/prisma";
import { Car } from "@prisma/client";
import { AppError } from "../../../errors/AppError";

describe("Unit test: Ensure Validated Id middleware", () => {
  let req: Partial<Request> = {};
  let res: Partial<Response> = {};
  let next: NextFunction = jest.fn();

  const carTb = prisma.car;
  let car: Car;

  const paramsIdProps = {
    error: "Car not found.",
    model: "car",
    field: "id",
  }

  beforeEach(async () => {
    next = jest.fn();
    car = await carTb.create({ data: carCreateMock });
  });

  test("Should be able to validate a valid request id", async () => {
    req.params = {
      ...req.params,
      id: car.id,
    };

    await ensureMiddleware.carIdExists(req as Request, res as Response, next);

    expect(next).toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
    expect(res.locals).toHaveProperty("foundCar");
  });

  test("Should not be able to validate a invalid request id", () => {
    req.params = {
      ...req.params,
      id: "Invalid-id",
    };
    
    expect(async () => {
      await ensureMiddleware.carIdExists(req as Request, res as Response, next);
    }).rejects.toThrow(paramsIdProps.error);

    expect(next).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(0);
  });
});
