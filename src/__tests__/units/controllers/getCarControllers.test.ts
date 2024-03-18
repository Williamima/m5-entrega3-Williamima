import "reflect-metadata";
import { CarServices } from "../../../Services";
import { Request, Response } from "express";
import { prisma } from "../../../database/prisma";
import { CarControllers } from "../../../controllers/CarControllers";
import { container } from "tsyringe";
import { getCarControllerMock } from "../../__mocks__/units";
import { Car } from "@prisma/client";
import { carCreateMock } from "../../__mocks__";

describe("Unit test: Get Car Controller", () => {
  const { expectedValue } = getCarControllerMock;

  container.registerSingleton("CarServices", CarServices);
  const getCarController = container.resolve(CarControllers);
  
  const carTb = prisma.car;
  
  let car: Car;
  
  let req: Partial<Request> = {};
  let res: Partial<Response> = {};
  
  beforeEach(async () => {
    await carTb.deleteMany();

    car = await carTb.create({ data: carCreateMock });
    
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
  });
  
  afterAll(async () => {
    await carTb.deleteMany();
  });
  
  test("Should be able to get a car successfully", async () => {
    req.params = { id: car.id }

    await getCarController.findOne(req as Request, res as Response)

    expect(res.json).toHaveBeenCalled()
    expect(res.json).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith(expectedValue)
    
    expect(res.status).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(200)
  });
});
