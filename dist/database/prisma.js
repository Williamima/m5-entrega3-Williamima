"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const env = process.env.NODE_ENV;
exports.prisma = new client_1.PrismaClient({
    log: env === "test" ? [] : ["query"],
});
