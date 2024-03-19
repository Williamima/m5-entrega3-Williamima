"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    statusCode;
    message;
    constructor(statusCode = 400, message) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.AppError = AppError;
