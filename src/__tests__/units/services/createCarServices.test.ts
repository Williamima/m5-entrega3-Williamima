import "reflect-metadata";
import { CarServices } from "../../../Services";
import { prisma } from "../../../database/prisma";
import { createCarServicesMock } from "../../__mocks__/units";


describe("Unit test: Create Car Services", () => {
  const { body, expectedValue } = createCarServicesMock;

  const createCarServices = new CarServices().create;
  
  const carTb = prisma.car;
  
  beforeEach(async () => {
    await carTb.deleteMany();    
  });
  
  test("Should be able to create a car successfully", async () => {
    const received = await createCarServices(body);

    expect(received).toStrictEqual(expectedValue);
  });
});
