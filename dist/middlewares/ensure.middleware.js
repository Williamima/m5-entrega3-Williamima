"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureMiddleware = void 0;
const prisma_1 = require("../database/prisma");
const AppError_1 = require("../errors/AppError");
const tsyringe_1 = require("tsyringe");
class EnsureMiddlaware {
    validateBody = (schema) => (req, _, next) => {
        req.body = schema.parse(req.body);
        return next();
    };
    carIdExists = async ({ params }, res, next) => {
        const id = params.id;
        const foundCar = await prisma_1.prisma.car.findFirst({
            where: { id },
        });
        if (!id) {
            return next();
        }
        const car = await prisma_1.prisma.car.findUnique({
            where: { id },
        });
        if (!car) {
            throw new AppError_1.AppError(404, "Car not found.");
        }
        res.locals = { ...res.locals, foundCar };
        return next();
    };
}
exports.ensureMiddleware = tsyringe_1.container.resolve(EnsureMiddlaware);
