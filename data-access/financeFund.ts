import { db } from "@/lib/db"
export const getFinanceProfileById = async (id: string) => {
    try {
        const financeProfile = await db.financeProfile.findUnique({ where: { id: id } })
        return financeProfile

    } catch {
        return null
    }
}
export const getAllFundProfile = async () => {
    try {
        const financeProfile = await db.financeProfile.findMany()
        return financeProfile
    } catch {
        return null
    }
}
export const getCompanyFundById = async (id: string) => {
    try {
        const financeProfile = await db.companyFund.findUnique({ where: { id: id } })
        return financeProfile

    } catch {
        return null
    }
}
export const getAllCompanyFund = async () => {
    try {
        const financeProfile = await db.companyFund.findMany()
        return financeProfile
    } catch {
        return null
    }
}
