"use server"

import { db } from "@/lib/db"

export const makeMainImage = async (id:string, mainImage:string) => {
    await db.cars.update({
        where:{
            id
        },
        data:{
            mainImage:mainImage
        }
    })
}