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
  resident: z.string().regex(/^[؀-ۿ\s]+$/),
  workSector: z.string().regex(/^[؀-ۿ\s]+$/),
  salary: z.string(),
  bank: z.string().regex(/^[؀-ۿ\s]+$/),
  valueOfMortgage: z.string().regex(/^[0-9]+$/).optional(),
  valueOfVisaInstallment: z.string().regex(/^[0-9]+$/).optional(),
  valueOfPersonalLoan: z.string().regex(/^[0-9]+$/).optional(),
  valueOfCarInstallment: z.string().regex(/^[0-9]+$/).optional(),
  vehicleClass:z.string(),
  yearOfManufacture:z.string(),
  brand:z.string(),
  model:z.string(),
})
