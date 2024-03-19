"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarServices = void 0;
const tsyringe_1 = require("tsyringe");
const schemas_1 = require("../schemas");
const prisma_1 = require("../database/prisma");
let CarServices = class CarServices {
    async create(data) {
        const newCar = await prisma_1.prisma.car.create({ data });
        return schemas_1.carSchema.parse(newCar);
    }
    async update(id, data) {
        const updatedCar = await prisma_1.prisma.car.update({
            where: { id },
            data,
        });
        return schemas_1.carSchema.parse(updatedCar);
    }
    async delete(id) {
        await prisma_1.prisma.car.delete({ where: { id } });
    }
    async findOne(id) {
        const car = await prisma_1.prisma.car.findFirst({
            where: { id },
        });
        return schemas_1.carSchema.parse(car);
    }
    async findMany() {
        return schemas_1.carSchema.array().parse(await prisma_1.prisma.car.findMany());
    }
};
exports.CarServices = CarServices;
exports.CarServices = CarServices = __decorate([
    (0, tsyringe_1.injectable)()
], CarServices);
