import "reflect-metadata";
import "express-async-errors"
import express, { json } from 'express'
import "dotenv/config"
import helmet from 'helmet'
import supertest from "supertest";

export const app = express()

app.use(helmet())
app.use(json())