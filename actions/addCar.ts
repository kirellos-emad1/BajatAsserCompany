"use server"
import { getUserById } from "@/data-access/user"
import { AddCar } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";

export const addCar = async (values: z.infer<typeof AddCar>, id: string) => {
    if (!id) return { error: "سجل دخول اولا" }
    const existingUser = await getUserById(id)
    if (!existingUser) return { error: "User not found" }
    if (existingUser.role === "USER") return { error: "يجب ان تكون موظفا لتسجل سياره" }
    const validatedFields = AddCar.safeParse(values)
    if (!validatedFields.success) return { error: "خطاء في البيانات" };
    const { images, brand, model, vehicleClass, yearOfManufacture, fuelType, transmission, horsePower, price, engineCapacity, AutomotivePropulsionSystems, addToMainPage,stock } = validatedFields.data;
    if (!images) return { error: "لا توجد صور مرفقه" }
    await db.cars.create({
        data: {
            images,
            brand,
            model,
            vehicleClass,
            yearOfManufacture,
            fuelType,
            transmission,
            horsePower,
            price,
            engineCapacity,
            AutomotivePropulsionSystems,
            addToMainPage,
            stock
        }
    })

    return { success: "تم ضافه السياره" }

}