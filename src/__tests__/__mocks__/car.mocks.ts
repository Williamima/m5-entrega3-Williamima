export const carMock = {
  id: 1,
  name: "Subaru",
  description: "WRX STI",
  brand: "Subaru",
  year: 2022,
  km: 1,
};

export const carCreateMock = {
  name: carMock.name,
  description: carMock.description,
  brand: carMock.brand,
  year: carMock.year,
  km: carMock.km,
};

export const expectedValue = {
  id: expect.any(Number),
  name: carMock.name,
  description: carMock.description,
  brand: carMock.brand,
  year: carMock.year,
  km: carMock.km,
};
