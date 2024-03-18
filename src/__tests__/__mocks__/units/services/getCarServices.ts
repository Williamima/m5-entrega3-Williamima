const getCarControllerMock = {
    body: {
        id: expect.any(String),
    },
    expectedValue: {
        id: expect.any(String),
        name: "Subaru",
        description: "WRX STI" || null,
        brand: "Subaru",
        year: 2022,
        km: 1,
    }
}

export { getCarControllerMock }