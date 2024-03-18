import "reflect-metadata";
import { CarServices } from "../../../Services";
import { prisma } from "../../../database/prisma";
import { createCarServicesMock } from "../../__mocks__/units";
import { carCreateMock } from "../../__mocks__";
import { Car } from "@prisma/client";

describe("Unit test: Get Car Services", () => {
  const { expectedValue } = createCarServicesMock;

  const getCarServices = new CarServices().findOne;

  const carTb = prisma.car;

  let car: Car;

  beforeAll(async () => {
    await carTb.deleteMany();
    car = await carTb.create({ data: carCreateMock });
  });

  afterAll(async () => {
    await carTb.deleteMany();
  });

  test("Should be able to get a car successfully", async () => {
    const received = await getCarServices(car.id);

    expect(received).toStrictEqual(expectedValue);
  });
});
