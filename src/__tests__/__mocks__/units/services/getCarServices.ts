const getCarControllerMock = {
    body: {
        id: expect.any(String),
    },
    expectedValue: {
        id: expect.any(String),
        name: expect.any(String),
        description: expect.any(String) || null,
        brand: expect.any(String),
        year: expect.any(Number),
        km: expect.any(Number),
    }
}

export { getCarControllerMock }