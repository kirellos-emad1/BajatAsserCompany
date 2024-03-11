import { title } from "process";
import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email({
    message: "يرجي ادخال البريد الايكتروني"
  }),
  password: z.string().min(1, {
    message: "يجب ان لا تقل كلمه السر عن 	٨ احرف/ارقام"
  })
})
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "يرجي ادخال البريد الايكتروني",
  }),
  password: z.string().min(8, {
    message: "يجب ان لا تقل كلمه السر عن 	٨ احرف/ارقام",
  }),
  name: z.string().regex(/^[؀-ۿ\s]+$/, {
    message: 'برجاء كتابه اسم المستخدم باللغه العربيه'
  }).min(3, {
    message: "يرجي ادخال اسم الامستخدم"
  })
});
export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});
export const NewPasswordSchema = z.object({
  password: z.string().min(8, {
    message: "Minimum of 8 characters required",
  }),
});

export const FundSchema = z.object({
  name: z.string().regex(/^[؀-ۿ\s]+$/, {
    message: 'برجاء كتابه اسم المستخدم باللغه العربيه'
  }).min(3, {
    message: "يرجي ادخال اسم الامستخدم"
  }),
  email: z.string().email({
    message: "يرجي ادخال البريد الايكتروني"
  }),
  personalId: z.string().regex(/^[0-9]+$/, {
    message: " ارجاء ادخال رقم الهويه الشخصيه"
  }).min(10).max(11),
  mobileNumber: z.string().regex(/^[0-9+]+$/,
    {
      message: "الرجاء ادخال رقم الجوال دون شباك الدوله"
    }).min(10,
      {
        message: "الرجاء ادخال رقم الجوال دون شباك الدوله"
      }).max(10),

  city: z.string().regex(/^[؀-ۿ\s]+$/, {
    message: "الرجاء ادخال المدينه التي تقيم فيها"
  }),
  resident: z.string().min(3,{
    message:"برجاء اخيار اذا كنت مقيم / مواطن"
  }).regex(/^[؀-ۿ\s]+$/),
  workSector: z.string().min(3, {
    message:"برجاء ادخال نوع العمل"
  }).regex(/^[؀-ۿ\s]+$/),
  salary: z.string().min(3,{
    message: "برجاء كتابه الراتب الشهري"
  }).regex(/^[0-9]+$/),
  bank: z.string().regex(/^[؀-ۿ\s]+$/,{
    message:"برجاء اختيار البنك"
  }),
  valueOfMortgage: z.string().regex(/^[0-9]+$/,{
    message:" برجاء كتابه القسط الشهر للعقار"
  }).optional().default(""),
  valueOfVisaInstallment: z.string().regex(/^[0-9]+$/,{
    message:"برجاء كتابه القسط الشهري لاقساط الفيزا"
  }).optional().default(""),
  valueOfPersonalLoan: z.string().regex(/^[0-9]+$/,{
    message:"برجاء كتابه القسط الشهري للقرض الشخصي"
  }).optional().default(""),
  valueOfCarInstallment: z.string().regex(/^[0-9]+$/,{
    message:"برجاء كتابه القسط الشهري لقرض السياره"
  }).optional().default(""),
  vehicleClass:z.string().min(1,{
    message:"برجاء اختيار"
  }),
  yearOfManufacture:z.string().min(1,{
    message:"برجاء اختيار"
  }),
  brand:z.string().min(1,{
    message:"برجاء اختيار"
  }),
  model:z.string().min(1,{
    message:"برجاء اختيار"
  }),
})
