import { Car } from "@prisma/client";
import { prisma } from "../../database/prisma";
import { request } from "../utils/request";
import { carCreateMock, expectedReturn } from "../__mocks__/integrations";

describe("Integration Tests: Get car route.", () => {
  const baseUrl = "/cars";
  const carTb = prisma.car;

  let car: Car;

  beforeAll(async () => {
    await carTb.deleteMany();
    car = await carTb.create({ data: carCreateMock });
  });

  afterEach(async () => {
    await carTb.deleteMany();
  });

  test("Should be able to get a car successfully", async () => {
    await request.get(`${baseUrl}/${car.id}`).expect(200);

    expect(car).toStrictEqual(expectedReturn);
  });

  test("Should not be able to get a car - invalidy id", async () => {
    const data = await request
    .get(`${baseUrl}/invalid-id`)
    .expect(404)
    .then((response) => response.body);

    expect(data.message).toStrictEqual("Car not found.");
  });
});
