"use server"
import { db } from "@/lib/db";
import * as z from "zod";
import { FundSchema } from "@/schemas";

export const createFundProfile = async (values: z.infer<typeof FundSchema>,
    haveMortgage: boolean,
    isCarInstallment: boolean,
    isDisabled: boolean,
    isPersonalLoan: boolean,
    isTrafficViolations: boolean,
    isVisaInstallments: boolean,
    isAcceptTermsAndPolice: boolean) => {
    const validatedFields = FundSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "الرجاء مراجعه الطلب" };
    }

    const { salary, name, mobileNumber, personalId, city, email, resident, workSector, bank, valueOfCarInstallment, valueOfMortgage, valueOfPersonalLoan, valueOfVisaInstallment, vehicleClass, yearOfManufacture, model, brand } = validatedFields.data;
    const isValidName = name.split(" ")
    if(isValidName.length !== 3 ){
        return { error: "الرجاء كتابه الاسم ثلاثي" }

    }
    if (isCarInstallment === true && valueOfCarInstallment === "") {
        return { error: "الرجاء كتابه اقساط السياره" }
    }
    if (haveMortgage === true && valueOfMortgage === "") {
        return { error: "الرجاء كتابه اقساط العقار" }
    }
    if (isPersonalLoan === true && valueOfPersonalLoan === "") {
        return { error: "الرجاء كتابه اقساط القرض الشخصي" }
    }
    if (isVisaInstallments === true && valueOfVisaInstallment === "") {
        return { error: "الرجاء كتابه اقساط الفيزا" }
    }
    try {
        await db.financeProfile.create({
            data: {
                name: name,
                email: email,
                mobile: mobileNumber,
                bank: bank,
                salary: salary,
                personal_id: personalId,
                city: city,
                resident: resident,
                work_sector: workSector,
                vehicle_class: vehicleClass,
                model: model,
                brand: brand,
                year_of_manufacture: yearOfManufacture,
                valueOfCarInstallment: valueOfCarInstallment,
                valueOfMortgage: valueOfMortgage,
                valueOfPersonalLoan: valueOfPersonalLoan,
                valueOfVisaInstallment: valueOfVisaInstallment,
                haveMortgage: haveMortgage,
                isCarInstallment: isCarInstallment,
                isAcceptTermsAndPolice: isAcceptTermsAndPolice,
                isDisabled: isDisabled,
                isPersonalLoan: isPersonalLoan,
                isTrafficViolations: isTrafficViolations,
                isVisaInstallments: isVisaInstallments
            }
        })
        return {success: ' تم انشاء طلبك بنجاح سيتم مراجعه طلبك و التواصل معك في اقرب وقت'}
    }catch (err){
        console.log(err)
        return {error:"حدث خطاء"}
    }
}
