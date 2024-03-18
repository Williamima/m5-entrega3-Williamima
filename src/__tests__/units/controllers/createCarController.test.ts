import "reflect-metadata";
import { CarServices } from "../../../Services";
import { Request, Response } from "express";
import { prisma } from "../../../database/prisma";
import { createCarControllerMock } from "../../__mocks__";
import { CarControllers } from "../../../controllers/CarControllers";
import { container } from "tsyringe";

describe("Unit test: Create Car Controller", () => {
  const { body, expectedValue } = createCarControllerMock;

  container.registerSingleton("CarServices", CarServices);
  const createCarController = container.resolve(CarControllers);
  
  const carTb = prisma.car;
  
  let req: Partial<Request> = {};
  let res: Partial<Response> = {};
  
  beforeEach(async () => {
    await carTb.deleteMany();
    
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
  });
  
  afterAll(async () => {
    await carTb.deleteMany();
  });
  
  test("Should be able to create a car successfully", async () => {
    req.body = body

    await createCarController.create(req as Request, res as Response)

    expect(res.json).toHaveBeenCalled()
    expect(res.json).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith(expectedValue)
    
    expect(res.status).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(201)

  });
});
