"use server"
import { db } from "@/lib/db"

export const deleteCar = async (id:string) => {
    await db.cars.delete({
        where:{
            id
        }
    })
    
}