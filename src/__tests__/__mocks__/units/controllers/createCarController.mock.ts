const createCarControllerMock = {
  body: {
    name: "Subaru",
    description: "WRX STI" || null,
    brand: "Subaru",
    year: 2022,
    km: 1,
  },
  expectedValue: {
    id: expect.any(String),
    name: "Subaru",
    description: "WRX STI" || null,
    brand: "Subaru",
    year: 2022,
    km: 1,
  },
};

export { createCarControllerMock };
