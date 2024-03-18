import "reflect-metadata";
import { CarServices } from "../../../Services";
import { prisma } from "../../../database/prisma";
import { createCarServicesMock } from "../../__mocks__/units";
import { carCreateMock } from "../../__mocks__";
import { Car } from "@prisma/client";

describe("Unit test: Patch Car Services", () => {
  const { body, expectedValue } = createCarServicesMock;

  const patchCarServices = new CarServices().update;

  const carTb = prisma.car;

  let car: Car;

  beforeAll(async () => {
    await carTb.deleteMany();
    car = await carTb.create({ data: carCreateMock });
  });

  afterAll(async () => {
    await carTb.deleteMany();
  });

  test("Should be able to patch a car successfully", async () => {
    const received = await patchCarServices(car.id, body);

    expect(received).toStrictEqual(expectedValue);
  });
});
