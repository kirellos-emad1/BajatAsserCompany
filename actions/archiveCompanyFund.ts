"use server"
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";


export const archiveCompanyFund = async (id: string, isArchive: boolean) => {
    await db.companyFund.update({
        where: { id },
        data: {
            isArchive: isArchive
        }
    })
    revalidatePath('/dashboard/archive-fund-request')


}