import { prisma } from "../../database/prisma";
import { carCreateMock, expectedReturn } from "../__mocks__";
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

    expect(data).toStrictEqual(expectedReturn);
  });

  // test("Should not be able to create a car - invalidy body", async () => {
  //   const data = await request.post(baseUrl).send();

  //   const invalidObject = {
  //     "message": [
  //         {
  //           "code": "invalid_type",
  //           "expected": "string",
  //           "received": "undefined",
  //           "path": [
  //             "name"
  //           ],
  //           "message": "Required"
  //         },
  //         {
  //           "code": "invalid_type",
  //           "expected": "string",
  //           "received": "undefined",
  //           "path": [
  //             "description"
  //           ],
  //           "message": "Required"
  //         },
  //         {
  //           "code": "invalid_type",
  //           "expected": "string",
  //           "received": "undefined",
  //           "path": [
  //             "brand"
  //           ],
  //           "message": "Required"
  //         },
  //         {
  //           "code": "invalid_type",
  //           "expected": "number",
  //           "received": "undefined",
  //           "path": [
  //             "year"
  //           ],
  //           "message": "Required"
  //         },
  //         {
  //           "code": "invalid_type",
  //           "expected": "number",
  //           "received": "undefined",
  //           "path": [
  //             "km"
  //           ],
  //           "message": "Required"
  //         }
  //       ]
  //   };

  //   expect(data.body).toStrictEqual(invalidObject);
  //   expect(data.status).toBe(400);
  // });
});
