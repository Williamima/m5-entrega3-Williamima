"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carReturnSchema = exports.carUpdateSchema = exports.carCreateSchema = exports.carSchema = void 0;
const zod_1 = require("zod");
const baseSchema_1 = require("./baseSchema");
const carSchema = baseSchema_1.baseSchema.extend({
    name: (0, zod_1.string)().min(1),
    description: (0, zod_1.string)().min(3),
    brand: (0, zod_1.string)().min(1),
    year: (0, zod_1.number)().positive(),
    km: (0, zod_1.number)().positive(),
});
exports.carSchema = carSchema;
const carCreateSchema = carSchema.omit({
    id: true,
});
exports.carCreateSchema = carCreateSchema;
const carUpdateSchema = carCreateSchema.partial();
exports.carUpdateSchema = carUpdateSchema;
const carReturnSchema = carSchema;
exports.carReturnSchema = carReturnSchema;
