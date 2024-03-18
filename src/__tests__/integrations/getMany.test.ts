import { Car } from "@prisma/client";
import { prisma } from "../../database/prisma";
import { request } from "../utils/request";
import { carCreateMock, expectedReturn } from "../__mocks__/integrations";

describe("Integration Tests: Get many cars route.", () => {
  const baseUrl = "/cars";
  const carTb = prisma.car;

  let car: Car;

  beforeEach(async () => {
    await carTb.deleteMany();
    car = await carTb.create({ data: carCreateMock });
  });

  afterAll(async () => {
    await carTb.deleteMany();
  });

  test("Should be able to get many cars successfully", async () => {
    const data = await request.get(baseUrl).expect(200);

    expect(data.body).toHaveLength(1);
    expect(data.body).toStrictEqual(Array(expectedReturn));
  });
});
