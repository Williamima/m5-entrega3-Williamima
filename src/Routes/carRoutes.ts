import { Request, Response, Router } from "express";
import { ensureMiddleware } from "../middlewares";
import { CarServices } from "../Services";
import { container } from "tsyringe";
import { CarControllers } from "../controllers/CarControllers";
import { carCreateSchema, carReturnSchema, carUpdateSchema } from "../schemas";

export const carRouter = Router();

container.registerSingleton("CarServices", CarServices);
const carControllers = container.resolve(CarControllers);

const createCar  = (req: Request, res: Response) => carControllers.create(req, res)
const findManyCars = (req: Request, res: Response) => carControllers.findMany(req, res)
const findOneCar = (req: Request, res: Response) => carControllers.findOne(req, res)
const updateCar = (req: Request, res: Response) => carControllers.update(req, res)
const deleteCar = (req: Request, res: Response) => carControllers.delete(req, res)

carRouter.post(
  "/",
  ensureMiddleware.validateBody(carCreateSchema),
  createCar
);
carRouter.get("/", findManyCars);

carRouter.use(
  "/:id",
  ensureMiddleware.carIdExists,
);

carRouter.get("/:id", findOneCar);
carRouter.patch("/:id", ensureMiddleware.validateBody(carUpdateSchema), updateCar);
carRouter.delete("/:id", deleteCar);
