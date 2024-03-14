import { z } from "zod";
import { carCreateSchema, carReturnSchema, carSchema, carUpdateSchema } from "../schemas";

type Car = z.infer<typeof carSchema>; 
type CarCreate = z.infer<typeof carCreateSchema>;
type CarReturn = z.infer<typeof carReturnSchema>;
type CarUpdate = z.infer<typeof carUpdateSchema>;

export { Car, CarCreate, CarReturn, CarUpdate };
