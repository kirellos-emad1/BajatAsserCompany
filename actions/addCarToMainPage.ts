"use server"

import { db } from "@/lib/db"

export const addCarToMainPage = async (id:string, addOrRemove:boolean) => {
    await db.cars.update({
        where:{
            id
        },
        data:{
            addToMainPage:addOrRemove
        }
    })
}