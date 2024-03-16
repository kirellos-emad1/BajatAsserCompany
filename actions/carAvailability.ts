"use server"
import { db } from "@/lib/db";

export const carAvailability = async (id:string, isAvailable:boolean) => {

    await db.cars.update({
        where:{
            id
        },
        data:{
            stock:isAvailable
        }
    })
    
}