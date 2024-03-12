"use server"

import { db } from "@/lib/db"
export const deleteUser = async(id:string)=>{
    console.log(id)
    const deletedUser = await db.user.delete({
        where:{id}
    })
    
}