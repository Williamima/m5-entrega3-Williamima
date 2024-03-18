const carMock = {
  name: "Subaru",
  description: "WRX STI" || null,
  brand: "Subaru",
  year: 2022,
  km: 1,
};

const carCreateMock = {
  name: carMock.name,
  description: carMock.description || null,
  brand: carMock.brand,
  year: carMock.year,
  km: carMock.km,
};

const carUpdateMock = {
  name: "Mercedes",
};

const expectedReturn = {
  id: expect.any(String),
  name: carMock.name,
  description: carMock.description || null,
  brand: carMock.brand,
  year: carMock.year,
  km: carMock.km,
};

export { carMock, carCreateMock, carUpdateMock, expectedReturn };
