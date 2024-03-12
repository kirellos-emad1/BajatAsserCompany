"use server"

import { getUserById } from "@/data-access/user"
import { db } from "@/lib/db"

export const downgradeMemberToUser = async (id: string, adminId: string) => {
    const isAdmin = await getUserById(adminId)
    if (isAdmin?.role === "ADMIN") {
        const isUser = await getUserById(id)
        if (isUser?.role === "MEMBER") {
            const updateUser = await db.user.update({
                where: {
                    id
                }, data: {
                    role: "USER"
                }
            })
        }
    }
    return
} 