const patchCarServicesMock = {
    body: {
        id: expect.any(String),
        name: "Cadilac",
    },
    expectedValue: {
        id: expect.any(String),
        name: "Cadilac",
        description: "WRX STI" || null,
        brand: "Subaru",
        year: 2022,
        km: 1,
    }
}

export { patchCarServicesMock }