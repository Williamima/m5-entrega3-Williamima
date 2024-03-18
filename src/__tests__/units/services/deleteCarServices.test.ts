import "reflect-metadata";
import { CarServices } from "../../../Services";
import { prisma } from "../../../database/prisma";
import { carCreateMock } from "../../__mocks__";
import { Car } from "@prisma/client";


describe("Unit test: Delete Car Services", () => {
  const deleteCarServices = new CarServices().delete;
  
  const carTb = prisma.car;
  
  let car: Car;

  beforeAll(async () => {
    await carTb.deleteMany();
    car = await carTb.create({ data: carCreateMock });
  });
  
  afterAll(async () => {
    await carTb.deleteMany();
  });
  
  test("Should be able to delete a car successfully", async () => {
    await deleteCarServices(car.id);

    expect(204);
  });
});
