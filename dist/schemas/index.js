"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carReturnSchema = exports.carUpdateSchema = exports.carCreateSchema = exports.carSchema = exports.baseSchema = void 0;
const baseSchema_1 = require("./baseSchema");
Object.defineProperty(exports, "baseSchema", { enumerable: true, get: function () { return baseSchema_1.baseSchema; } });
const carSchema_1 = require("./carSchema");
Object.defineProperty(exports, "carSchema", { enumerable: true, get: function () { return carSchema_1.carSchema; } });
Object.defineProperty(exports, "carCreateSchema", { enumerable: true, get: function () { return carSchema_1.carCreateSchema; } });
Object.defineProperty(exports, "carUpdateSchema", { enumerable: true, get: function () { return carSchema_1.carUpdateSchema; } });
Object.defineProperty(exports, "carReturnSchema", { enumerable: true, get: function () { return carSchema_1.carReturnSchema; } });
