import "reflect-metadata";
import { NextFunction, Request, Response } from "express";
import { ensureMiddleware } from "../../../middlewares";
import {
  validateBodyMock,
  validateSchemaMock,
  invalidateBodyMock,
} from "../../__mocks__";

describe("Unit test: Ensure Validated Body middleware", () => {
  const validateBodyMiddleware =
    ensureMiddleware.validateBody(validateSchemaMock);

  let req: Partial<Request> = {};
  let res: Partial<Response> = {};
  let next: NextFunction = jest.fn();

  beforeEach(() => {
    next = jest.fn();
  });

  test("Should be able to validate a request body successfully", async () => {
    req.body = validateBodyMock.bodyData;

    validateBodyMiddleware(req as Request, res as Response, next);

    expect(req.body).toStrictEqual(validateBodyMock.expectedValue);
    expect(next).toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
  });

  test("Should not be able to validate a invalid request body", async () => {
    req.body = invalidateBodyMock.bodyData;

    expect(() => {
      validateBodyMiddleware(req as Request, res as Response, next);
    }).toThrow(invalidateBodyMock.expectedValue);
    
    expect(next).toHaveBeenCalledTimes(0);
    expect(next).not.toHaveBeenCalled();
  });
});
