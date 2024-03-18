import { Car } from "@prisma/client";
import { prisma } from "../../database/prisma";
import { request } from "../utils/request";
import {
  carCreateMock,
  carUpdateMock,
  expectedReturn,
} from "../__mocks__/integrations";

describe("Integration Tests: Get car route.", () => {
  const baseUrl = "/cars";
  const carTb = prisma.car;

  let car: Car;

  beforeEach(async () => {
    await carTb.deleteMany();
    car = await carTb.create({ data: carCreateMock });
  });

  afterEach(async () => {
    await carTb.deleteMany();
  });

  test("Should be able to update a car successfully", async () => {
    const data = await request
      .patch(`${baseUrl}/${car.id}`)
      .send(carUpdateMock)
      .expect(200)
      .then((response) => response.body);

    expect(data.id).toBeDefined();
    expect(data.name).toStrictEqual(carUpdateMock.name);
    expect(data.description).toStrictEqual(expectedReturn.description);
    expect(data.brand).toStrictEqual(expectedReturn.brand);
    expect(data.year).toStrictEqual(expectedReturn.year);
    expect(data.km).toStrictEqual(expectedReturn.km);
  });

  test("Should not be able to update a car - invalidy id", async () => {
    
    const data = await request
    .patch(`${baseUrl}/invalid-id`)
    .expect(404)
    .then((response) => response.body);

    expect(data.message).toBe("Car not found.");
  });
});
