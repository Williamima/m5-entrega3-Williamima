"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarControllers = void 0;
const tsyringe_1 = require("tsyringe");
const Services_1 = require("../Services");
let CarControllers = class CarControllers {
    carServices;
    constructor(carServices) {
        this.carServices = carServices;
    }
    async create(req, res) {
        const newCar = await this.carServices.create(req.body);
        return res.status(201).json(newCar);
    }
    async findMany(req, res) {
        const cars = await this.carServices.findMany();
        return res.status(200).json(cars);
    }
    async findOne(req, res) {
        const { id } = req.params;
        const car = await this.carServices.findOne(id);
        return res.status(200).json(car);
    }
    async update(req, res) {
        const { id } = req.params;
        const data = req.body;
        const car = await this.carServices.update(id, data);
        return res.status(200).json(car);
    }
    async delete(req, res) {
        const { id } = req.params;
        await this.carServices.delete(id);
        return res.status(204).json();
    }
};
exports.CarControllers = CarControllers;
exports.CarControllers = CarControllers = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("CarServices")),
    __metadata("design:paramtypes", [Services_1.CarServices])
], CarControllers);
