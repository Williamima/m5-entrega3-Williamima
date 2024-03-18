import { Car } from "@prisma/client";
import { prisma } from "../../database/prisma";
import { request } from "../utils/request";
import { carCreateMock } from "../__mocks__/integrations";

describe("Integration Tests: Delete car route.", () => {
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

  test("Should be able to delete a car successfully", async () => {
    await request.delete(`${baseUrl}/${car.id}`).expect(204);
  });

  test("Should not be able to delete a car - invalidy id", async () => {
    const data = await request
      .get(`${baseUrl}/invalid-id`)
      .expect(404)
      .then((response) => response.body);

    expect(data.message).toStrictEqual("Car not found.");
  });
});
