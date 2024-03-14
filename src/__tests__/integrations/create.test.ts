import { prisma } from "../../database/prisma";
import { carCreateMock, carMock, expectedValue } from "../__mocks__/car.mocks";
import { request } from "../utils/request";

describe("Integration Tests: Create car route.", () => {
  const baseUrl = "/cars";
  const carTb = prisma.car;

  beforeEach(async () => {
    await carTb.deleteMany();
  });

  test("Should be able to create a car successfully", async () => {
    const data = await request
      .post(baseUrl)
      .send(carCreateMock)
      .expect(201)
      .then((response) => response.body);
    // console.log(data.body)

    expect(data).toStrictEqual(carMock);
  });
});
