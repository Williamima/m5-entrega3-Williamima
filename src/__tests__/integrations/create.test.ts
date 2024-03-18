import { number } from "zod";
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

  test("Should not be able to create a car - invalidy body", async () => {
    const data = await request.post(baseUrl).send({});

    const invalidObject = {
      message:
        '[\n  {\n    "code": "invalid_type",\n    "expected": "string",\n    "received": "undefined",\n    "path": [\n      "name"\n    ],\n    "message": "Required"\n  },\n  {\n    "code": "invalid_type",\n    "expected": "string",\n    "received": "undefined",\n    "path": [\n      "description"\n    ],\n    "message": "Required"\n  },\n  {\n    "code": "invalid_type",\n    "expected": "string",\n    "received": "undefined",\n    "path": [\n      "brand"\n    ],\n    "message": "Required"\n  },\n  {\n    "code": "invalid_type",\n    "expected": "number",\n    "received": "undefined",\n    "path": [\n      "year"\n    ],\n    "message": "Required"\n  },\n  {\n    "code": "invalid_type",\n    "expected": "number",\n    "received": "undefined",\n    "path": [\n      "km"\n    ],\n    "message": "Required"\n  }\n]',
    };

    expect(data.body).toStrictEqual(invalidObject);
    expect(data.status).toBe(400);
  });
});
