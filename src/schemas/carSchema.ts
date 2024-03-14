import { number, string } from "zod";
import { baseSchema } from "./baseSchema";

const carSchema = baseSchema.extend({
  name: string().min(1),
  description: string().min(3),
  brand: string().min(1),
  year: number().positive(),
  km: number().positive(),
});

const carCreateSchema = carSchema.omit({
  id: true,
});

const carUpdateSchema = carCreateSchema.partial();

const carReturnSchema = carSchema;

export { carSchema, carCreateSchema, carUpdateSchema, carReturnSchema };
