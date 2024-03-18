import { injectable } from "tsyringe";
import { CarCreate, Car, CarUpdate } from "../interfaces";
import { carSchema } from "../schemas";
import { prisma } from "../database/prisma";

@injectable()
export class CarServices {
  async create(data: CarCreate): Promise<Car> {
    const newCar = await prisma.car.create({ data });

    return carSchema.parse(newCar);
  }

  async update(id: string, data: CarUpdate): Promise<Car> {
    const updatedCar = await prisma.car.update({
      where: { id }, data
    })

    return carSchema.parse(updatedCar)
  }

  async delete(id: string): Promise<void> {
    await prisma.car.delete({ where: { id } })
  }

  async findOne(id: string): Promise<Car> {
    const car = await prisma.car.findFirst({
      where: { id },
    })

    return carSchema.parse(car)
  }

  async findMany(): Promise<Car[]> {
    return carSchema.array().parse(await prisma.car.findMany())
  }
}
