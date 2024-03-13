import { db } from "@/lib/db"
export const getCarById = async (id: string) => {
    try {

        const cars = await db.cars.findUnique({ where: { id: id } })
        return cars

    } catch {
        return null
    }
}

export const getAllCars = async () => {
    try {
        const cars = await db.cars.findMany()
        return cars
    } catch {
        return null
    }
}