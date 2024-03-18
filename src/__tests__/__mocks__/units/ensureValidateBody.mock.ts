import { ZodError, z } from "zod";

const validateSchemaMock = z.object({
  name: z.string(),
  description: z.string().optional(),
  brand: z.string(),
  year: z.number(),
  km: z.number(),
});

const validateBodyMock = {
  bodyData: {
    name: "Subaru",
    description: "WRX STI" || null,
    brand: "Subaru",
    year: 2022,
    km: 1,
    chaveExtra: true,
  },
  expectedValue: {
    name: "Subaru",
    description: "WRX STI" || null,
    brand: "Subaru",
    year: 2022,
    km: 1,
  },
};

const invalidateIdMock = {
  bodyData: {
    id: "invalid-id",
  },
  expectedValue: ZodError,
};

const invalidateBodyMock = {
  bodyData: {},
  expectedValue: ZodError,
};

export {
  validateSchemaMock,
  validateBodyMock,
  invalidateBodyMock,
  invalidateIdMock,
};
