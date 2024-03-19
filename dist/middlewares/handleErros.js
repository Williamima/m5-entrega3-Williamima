"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const AppError_1 = require("../errors/AppError");
const zod_1 = require("zod");
class HandleErros {
    execute(error, _, res, __) {
        if (error instanceof AppError_1.AppError) {
            return res.status(error.statusCode).json({
                message: error.message,
            });
        }
        if (error instanceof zod_1.ZodError) {
            return res.status(400).json({
                message: error.message,
            });
        }
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}
exports.handleError = new HandleErros();
