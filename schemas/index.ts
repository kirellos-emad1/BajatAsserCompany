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
  name: z.string().min(3, {
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
        message: "الرجاء ادخال رقم الجوال المكون من 10 خانات"
      }).max(10, {
        message: "الرجاء ادخال رقم الجوال المكون من 10 خانات"
      }),

  zone: z.string().regex(/^[؀-ۿ\s]+$/, {
    message: "الرجاء ادخال المدينه التي تقيم فيها"
  }),
  resident: z.string().min(3, {
    message: "برجاء اخيار اذا كنت مقيم / مواطن"
  }).regex(/^[؀-ۿ\s]+$/),
  workSector: z.string().min(3, {
    message: "برجاء ادخال نوع العمل"
  }).regex(/^[؀-ۿ\s/]+$/),
  salary: z.string().min(3, {
    message: "برجاء كتابه الراتب الشهري"
  }).regex(/^[0-9]+$/),
  bank: z.string().regex(/^[؀-ۿ\s]+$/, {
    message: "برجاء اختيار البنك"
  }),
  valueOfMortgage: z.string().optional(),
  valueOfVisaInstallment: z.string().optional(),
  valueOfPersonalLoan: z.string().optional(),
  valueOfCarInstallment: z.string().optional(),
  vehicleClass: z.string().min(1, {
    message: "برجاء اختيار"
  }),
  yearOfManufacture: z.string().min(1, {
    message: "برجاء اختيار"
  }),
  brand: z.string().min(1, {
    message: "برجاء ادخال / اختيار"
  }),
  model: z.string().min(1, {
    message: "برجاء ادخال / اختيار"
  }),
})


export const companyFundSchema = z.object({
  companyName: z.string().min(1, {
    message: "يرجي ادخال اسم الشركه"
  }),
  corporateAnniversary: z.string().regex(/^[؀-ۿ\s]+$/).min(3, {
    message: "يرجي اختيار عمر المنشأة"
  }),
  mobileNumber: z.string().regex(/^[0-9]+$/).min(3, {
    message: "يرجي ادخال رقم الجوال"
  }),
  telNumber: z.string().regex(/^[0-9]+$/).min(3).optional(),
  email: z.string().email({
    message: "يرجي ادخال البريد الايكتروني"
  }),
  zone: z.string().regex(/^[؀-ۿ\s]+$/, {
    message: "الرجاء اختيار مقر الشركة "
  }),
  bank: z.string().regex(/^[؀-ۿ\s]+$/, {
    message: "برجاء اختيار البنك"
  }),
  countOfCars: z.string().regex(/^[0-9]+$/, {
    message: "برجاء كتابه عدد السيارات"
  })
})

export const AddCar = z.object({
  brand: z.string().min(1, {
    message: "برجاء ادخال / اختيار"
  }),
  model: z.string().min(1, {
    message: "برجاء ادخال / اختيار"
  }),
  vehicleClass: z.string().min(1, {
    message: "برجاء اختيار"
  }),
  yearOfManufacture: z.string().min(1, {
    message: "برجاء اختيار"
  }),
  horsePower: z.string().optional(),
  fuelType: z.string().min(1, {
    message: "برجاء اختيار"
  }),
  engineCapacity: z.string().optional(),
  price: z.string().optional(),
  transmission: z.string().min(1, {
    message: "برجاء اختيار"
  }),
  images: z.array(z.string()).optional(),
  AutomotivePropulsionSystems: z.string().min(1,{
    message:"اختار نظام الدفع"
  }),

  addToMainPage: z.boolean().optional(),
  stock: z.boolean().optional()
})