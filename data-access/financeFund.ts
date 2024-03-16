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
        const financeProfile = await db.financeProfile.findMany(
            {
                where: { isArchive: false }
            })
        return financeProfile
    } catch {
        return null
    }
}
export const getArchiveFundProfile = async () => {
    try {
        const financeProfile = await db.financeProfile.findMany({
            where: { isArchive: true }
        })
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
        const financeProfile = await db.companyFund.findMany({
            where: { isArchive: false }
        })
        return financeProfile
    } catch {
        return null
    }
}
export const getArchiveCompanyFund = async () => {
    try {
        const financeProfile = await db.companyFund.findMany({
            where: { isArchive: true }
        })
        return financeProfile
    } catch {
        return null
    }
}
