"use server"

import { getUserById } from "@/data-access/user"
import { db } from "@/lib/db"

export const updateUserRoleToMember = async (id: string, adminId: string) => {
    const isAdmin = await getUserById(adminId)
    if (isAdmin?.role === "ADMIN") {
        const isUser = await getUserById(id)
        if (isUser?.role === "USER") {
            const updateUser = await db.user.update({
                where: {
                    id
                }, data: {
                    role: "MEMBER"
                }
            })
        }
    }
    return
} 