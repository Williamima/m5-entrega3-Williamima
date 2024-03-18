import "reflect-metadata";
import { NextFunction, Request, Response } from "express";
import { ensureMiddleware } from "../../../middlewares";
import { invalidateBodyMock } from "../../__mocks__";

describe("Unit test: Ensure Validated Id middleware", () => {
  let req: Partial<Request> = {};
  let res: Partial<Response> = {};
  let next: NextFunction = jest.fn();
  
  beforeEach(() => {
    next = jest.fn();
  });

  const validateIdMiddleware = async (): Promise<void> => {
    await ensureMiddleware.carIdExists(req as Request, res as Response, next);
  };

  test("Should not be able to validate a invalid request id", async () => {
    req.params = invalidateBodyMock.bodyData;

    expect(async (): Promise<void> => {
      await validateIdMiddleware();
    }).toThrow(invalidateBodyMock.expectedValue);

    expect(next).toHaveBeenCalledTimes(0);
    expect(next).not.toHaveBeenCalled();
  });
});
