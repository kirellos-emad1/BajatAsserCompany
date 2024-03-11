"use server"
import { db } from "@/lib/db";
import * as z from "zod";
import { companyFundSchema } from "@/schemas";

export const createCompanyFund = async (values: z.infer<typeof companyFundSchema>)=>{
    const validatedFields = companyFundSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "الرجاء مراجعه الطلب" };
    }
    const { companyName, mobileNumber, telNumber, city, email, bank, countOfCars, corporateAnniversary } = validatedFields.data;

    try {
        await db.companyFund.create({
            data: {
                companyName: companyName,
                email: email,
                mobileNumber: mobileNumber,
                telNumber: telNumber,
                bank: bank,
                city: city,
                carsCount:countOfCars,
                corporateAnniversary:corporateAnniversary
            }
        })
        return {success: 'تم انشاء طلبكم بنجاح سيتم مراجعه طلبكم و التواصل معكم في اقرب وقت'}
    }catch (err){
        console.log(err)
        return {error:"حدث خطاء"}
    }

}
