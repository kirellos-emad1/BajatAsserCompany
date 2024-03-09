import { db } from "@/lib/db"
export const getFinanceProfileById = async (id: string) => {
    try {
        const financeProfile = await db.financeProfile.findUnique({ where: { id: id } })
        return financeProfile

    } catch {
        return null
    }
}
export const getFinanceProfile = async () => {
    try {
        const financeProfile = await db.financeProfile.findMany()
        return financeProfile
    } catch {
        return null
    }
}