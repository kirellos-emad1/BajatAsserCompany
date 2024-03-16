"use server"
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const archivePersonalFund = async (id: string, isArchive: boolean) => {
    await db.financeProfile.update({
        where: { id },
        data: {
            isArchive: isArchive
        }
    })
    revalidatePath('/dashboard/archive-fund-request')

}