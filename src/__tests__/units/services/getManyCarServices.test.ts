import "reflect-metadata";
import { CarServices } from "../../../Services";
import { prisma } from "../../../database/prisma";
import { createCarServicesMock } from "../../__mocks__/units";
import { carCreateMock } from "../../__mocks__";
import { Car } from "@prisma/client";

describe("Unit test: GetMany Cars Services", () => {
  const { expectedValue } = createCarServicesMock;

  const getCarServices = new CarServices().findMany;

  const carTb = prisma.car;

  let car: Car;

  beforeAll(async () => {
    await carTb.deleteMany();
    car = await carTb.create({ data: carCreateMock });
  });

  afterAll(async () => {
    await carTb.deleteMany();
  });

  test("Should be able to get many cars successfully", async () => {
    const received = await getCarServices();

    expect(received).toStrictEqual(Array(expectedValue));
  });
});
