"use client";
import * as z from "zod";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTransition, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "@/components/requestFund/CardWrapper";
import { FundSchema, companyFundSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/FormError";
import { FormSuccess } from "@/components/FormSuccess";
import { createFundProfile } from "@/actions/createFund";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import cites from "@/statesOfSaudiArabia.json";
import cars from "@/cars.json";
import TextStyle from "../TextStyle";
import { createCompanyFund } from "@/actions/createCompanyFund";
import {
  BsCheckCircleFill,
  Bs1CircleFill,
  Bs2CircleFill,
  Bs3CircleFill,
  Bs4CircleFill,
} from "react-icons/bs";

export const FundForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [haveMortgage, setHaveMortgage] = useState<boolean>(false);
  const [isTrafficViolations, setIsTrafficViolations] =
    useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isVisaInstallments, setIsVisaInstallments] = useState<boolean>(false);
  const [isPersonalLoan, setIsPersonalLoan] = useState<boolean>(false);
  const [isCarInstallment, setIsCarInstallment] = useState<boolean>(false);
  const [isAcceptTermsAndPolice, setIsAcceptTermsAndPolice] =
    useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isCompanyFund, setIsCompanyFund] = useState<boolean>(false);
  const [isSelectCar, setIsSelectCat] = useState<boolean>(true);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  });

  const handleBrandChange = (value: string) => {
    setSelectedBrand(value);
    // Reset the selected model when the brand changes
    setSelectedModel("");
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const onSubmit = (values: z.infer<typeof FundSchema>) => {
    if (isCompanyFund === false) {
      console.log(values)
      setError("");
      setSuccess("");
      if (!isAcceptTermsAndPolice) {
        return;
      }
      startTransition(() => {
        createFundProfile(
          values,
          haveMortgage,
          isCarInstallment,
          isDisabled,
          isPersonalLoan,
          isTrafficViolations,
          isVisaInstallments,
          isAcceptTermsAndPolice
        ).then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        });
      });
    }
  };
  const onSubmitCompanyFund = (values: z.infer<typeof companyFundSchema>) => {
    if (isCompanyFund) {
      setError("");
      setSuccess("");
      startTransition(() => {
        createCompanyFund(values).then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        });
      });
    }
  };
  const personalForm = useForm<z.infer<typeof FundSchema>>({
    resolver: zodResolver(FundSchema),
    defaultValues: {
      email: "",
      mobileNumber: "",
      name: "",
      personalId: "",
      zone: "",
      resident: "",
      workSector: "",
      salary: "",
      bank: "",
      vehicleClass: "",
      yearOfManufacture: "",
      brand: "",
      model: "",
      valueOfCarInstallment:"",
      valueOfMortgage:"",
      valueOfPersonalLoan:"",
      valueOfVisaInstallment:""
    },
  });
  const companyForm = useForm<z.infer<typeof companyFundSchema>>({
    resolver: zodResolver(companyFundSchema),
    defaultValues: {
      companyName: "",
      email:'',
      mobileNumber: "",
      zone: "",
      bank: "",
      corporateAnniversary: "",
      countOfCars: "",
    },
  });
  return (
    <main
      dir="ltr"
      data-aos="fade-right"
      className=" space-y-2 pt-2 rounded-xl border bg-card text-card-foreground shadow"
    >
      <div dir="rtl" className="flex gap-2 items-center  p-2">
        <Button
          onClick={() => setIsCompanyFund(false)}
          className={`rounded-3xl font-sans ${
            isCompanyFund && "bg-gray-400 transition-colors duration-700"
          } text-center`}
        >
          تمويل الافراد
        </Button>
        <Button
          onClick={() => setIsCompanyFund(true)}
          className={`rounded-3xl font-sans ${
            !isCompanyFund && "bg-gray-400 transition-colors duration-700"
          } text-center`}
        >
          تمويل الشركات
        </Button>
      </div>
      {!isCompanyFund && (
        <section
          dir="rtl"
          className=" grid  lg:grid-cols-4 gap-2 mx-2 grid-cols-2 "
        >
          <div
            className={` flex items-center  gap-1 bg-white py-1 px-2  rounded-xl shadow-lg ${
              currentIndex > 0 && "bg-gray-200 "
            } transition-colors duration-700`}
          >
            {currentIndex > 0 ? (
              <BsCheckCircleFill className="w-10 h-10 text-blue-800 transition-colors duration-700" />
            ) : (
              <Bs1CircleFill className="w-10 h-10 text-blue-700/90  transition-colors duration-700" />
            )}
            <p className="font-sans">معلومات شخصية</p>
          </div>
          <div
            className={` flex items-center  gap-1   bg-white py-1 px-2 rounded-xl shadow-lg ${
              currentIndex > 1 && "bg-gray-200 "
            }transition-colors duration-700`}
          >
            {currentIndex > 1 ? (
              <BsCheckCircleFill className="w-10 h-10 text-blue-800 transition-colors duration-700" />
            ) : (
              <Bs2CircleFill className="w-10 h-10 text-blue-700/90  transition-colors duration-700" />
            )}
            <p className="font-sans">معلومات ائتمانية</p>
          </div>
          <div
            className={` flex items-center  gap-1  bg-white py-1 px-2  rounded-xl shadow-lg ${
              currentIndex > 2 && "bg-gray-200"
            } transition-colors duration-700`}
          >
            {currentIndex > 2 ? (
              <BsCheckCircleFill className="w-10 h-10 text-blue-800 transition-colors duration-700" />
            ) : (
              <Bs3CircleFill className="w-10 h-10 text-blue-700/90  transition-colors duration-700" />
            )}
            <p className="font-sans"> السيارة المطلوبة</p>
          </div>
          <div
            className={` flex items-center  gap-1  bg-white py-1 px-2  rounded-xl shadow-lg ${
              currentIndex >= 3 && isAcceptTermsAndPolice && "bg-gray-200 "
            }transition-colors duration-700`}
          >
            {currentIndex >= 3 && isAcceptTermsAndPolice ? (
              <BsCheckCircleFill className="w-10 h-10 text-blue-800 transition-colors duration-700" />
            ) : (
              <Bs4CircleFill className="w-10 h-10 text-blue-700/90  transition-colors duration-700 " />
            )}
            <p className="font-sans"> اقرار و موافق</p>
          </div>
        </section>
      )}
      {!isCompanyFund ? (
        <CardWrapper
          headerLabel="التمويل للافراد"
          backButtonLabel=""
          backButtonHref=""
        >
          <Form {...personalForm}>
            <form
              onSubmit={personalForm.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <>
                {currentIndex === 0 && (
                  <section
                    data-aos="zoom-in"
                    dir="rtl"
                    className=" grid grid-1 lg:grid-cols-3 gap-4 md:grid-cols-2 "
                  >
                    <FormField
                      control={personalForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex  font-sans">
                            الاسم الثلاثي
                          </FormLabel>
                          <FormControl>
                            <Input
                              className=" placeholder:text-right w-full font-sans text-right"
                              {...field}
                              placeholder="الاسم الثلاثي"
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage className="font-sans text-right" />
                        </FormItem>
                      )}
                    ></FormField>
                    <FormField
                      control={personalForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex  font-sans">
                            البريد الالكترونى
                          </FormLabel>
                          <FormControl>
                            <Input
                              className=" placeholder:text-right w-full font-sans text-right"
                              {...field}
                              placeholder="John.doe@example.com"
                              type="email"
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage className="font-sans text-right" />
                        </FormItem>
                      )}
                    ></FormField>
                    <FormField
                      control={personalForm.control}
                      name="mobileNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex  font-sans">
                            الهاتف / الجوال
                          </FormLabel>
                          <FormControl>
                            <Input
                              className=" placeholder:text-right w-full font-sans text-right "
                              {...field}
                              disabled={isPending}
                              placeholder="الهاتف / الجوال"
                              minLength={10}
                              maxLength={10}
                            />
                          </FormControl>
                          <FormMessage className="font-sans text-right" />
                        </FormItem>
                      )}
                    ></FormField>
                    <FormField
                      control={personalForm.control}
                      name="personalId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex  font-sans">
                            رقم الهويه الشخصيه
                          </FormLabel>
                          <FormControl>
                            <Input
                              className=" placeholder:text-right w-full font-sans text-right "
                              {...field}
                              disabled={isPending}
                              placeholder="رقم الهويه الشخصيه"
                            />
                          </FormControl>
                          <FormMessage className="font-sans text-right" />
                        </FormItem>
                      )}
                    ></FormField>
                    <FormField
                      control={personalForm.control}
                      name="zone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex  font-sans">
                            المنطقة
                          </FormLabel>
                          <FormControl>
                            <Select
                              dir="rtl"
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="">
                                <SelectValue
                                  className="w-full"
                                  placeholder="اختار المنطقة"
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value={"المنطقة الشمالية"}>
                                  المنطقة الشمالية
                                </SelectItem>
                                <SelectItem value={"المنطقه الجنوبية"}>
                                  المنطقه الجنوبية
                                </SelectItem>
                                <SelectItem value={"المنطقه الشرقية"}>
                                  المنطقه الشرقية
                                </SelectItem>
                                <SelectItem value={"المنطقه الغربية"}>
                                  المنطقه الغربية
                                </SelectItem>
                                <SelectItem value={"المنطقه الوسطي"}>
                                  المنطقه الوسطي
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage className="font-sans text-right" />
                        </FormItem>
                      )}
                    ></FormField>
                    <FormField
                      control={personalForm.control}
                      name="resident"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex  font-sans">
                            مواطن / مقيم
                          </FormLabel>
                          <FormControl>
                            <Select
                              dir="rtl"
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="">
                                <SelectValue placeholder="اختار اذا كنت مواطن / مقيم" />
                              </SelectTrigger>
                              <SelectContent className="w-full">
                                <SelectItem value="مواطن سعودي">
                                  مواطن سعودي
                                </SelectItem>
                                <SelectItem value="مقيم">مقيم</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage className="font-sans text-right" />
                        </FormItem>
                      )}
                    ></FormField>
                    <FormField
                      control={personalForm.control}
                      name="workSector"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex  font-sans">
                            قطاع العمل
                          </FormLabel>
                          <FormControl>
                            <Select
                              dir="rtl"
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className=" ">
                                <SelectValue
                                  className="w-full"
                                  placeholder="اختار قطاع العمل"
                                />
                              </SelectTrigger>
                              <SelectContent className="w-full">
                                <SelectItem value="حكومي عسكري">
                                  حكومي عسكري
                                </SelectItem>
                                <SelectItem value="حكومي مدني">
                                  حكومي مدني
                                </SelectItem>
                                <SelectItem value="صاحب موسسه / شركه">
                                  صاحب موسسه / شركه
                                </SelectItem>
                                <SelectItem value="قطاع خاص">
                                  قطاع خاص
                                </SelectItem>
                                <SelectItem value="متقاعد">متقاعد</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage className="font-sans text-right" />
                        </FormItem>
                      )}
                    ></FormField>
                  </section>
                )}

                {currentIndex === 1 && (
                  <section
                    data-aos="zoom-in"
                    dir="rtl"
                    className=" grid grid-1 lg:grid-cols-2 gap-4 md:grid-cols-2 "
                  >
                    <FormField
                      control={personalForm.control}
                      name="salary"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex  font-sans">
                            الراتب
                          </FormLabel>
                          <FormControl>
                            <Input
                              className=" placeholder:text-right w-full font-sans text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                              {...field}
                              placeholder="الراتب"
                              disabled={isPending}
                              inputMode="numeric"
                              type="number"
                            />
                          </FormControl>
                          <FormMessage className="font-sans text-right" />
                        </FormItem>
                      )}
                    ></FormField>
                    <FormField
                      control={personalForm.control}
                      name="bank"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex  font-sans">
                            البنك
                          </FormLabel>
                          <FormControl>
                            <Select
                              dir="rtl"
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="">
                                <SelectValue placeholder="اختار البنك" />
                              </SelectTrigger>
                              <SelectContent className="w-full">
                                <SelectItem value="مصرف الراجحي">
                                  مصرف الراجحي
                                </SelectItem>
                                <SelectItem value="البنك الاهلي">
                                  البنك الاهلي
                                </SelectItem>
                                <SelectItem value="بنك البلاد">
                                  بنك البلاد
                                </SelectItem>
                                <SelectItem value="بنك الانماء">
                                  بنك الانماء
                                </SelectItem>
                                <SelectItem value="البنك العربي الوطني">
                                  البنك العربي الوطني
                                </SelectItem>
                                <SelectItem value="البتك السعودي الفرنسي">
                                  البتك السعودي الفرنسي
                                </SelectItem>
                                <SelectItem value="بنك الامارات">
                                  بنك الامارات
                                </SelectItem>
                                <SelectItem value="البنك الاول">
                                  البنك الاول
                                </SelectItem>
                                <SelectItem value="بنك الرياض">
                                  بنك الرياض
                                </SelectItem>
                                <SelectItem value="يتك الاستثمار">
                                  يتك الاستثمار
                                </SelectItem>
                                <SelectItem value="بنك الجزيرة">
                                  بنك الجزيرة
                                </SelectItem>
                                <SelectItem value="البنك السعودي الهولندي">
                                  البنك السعودي الهولندي
                                </SelectItem>
                                <SelectItem value="البنك السعودي البريطاني">
                                  البنك السعودي البريطاني
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage className="font-sans text-right" />
                        </FormItem>
                      )}
                    ></FormField>
                    <FormField
                      name="isDisabled"
                      render={() => (
                        <FormItem>
                          <FormLabel className="flex font-sans">
                            هل لديك تعثر في سمة؟
                          </FormLabel>
                          <FormLabel className="ml-2">لا</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={!isDisabled}
                              onCheckedChange={() => setIsDisabled(false)}
                            />
                          </FormControl>
                          <span className="mx-2">|</span>
                          <FormLabel className="ml-2">نعم</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={isDisabled}
                              onCheckedChange={() => setIsDisabled(true)}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="isTrafficViolations"
                      render={() => (
                        <FormItem>
                          <FormLabel className="flex font-sans">
                            عليك مخالفات مرورية؟
                          </FormLabel>
                          <FormLabel className="ml-2">لا</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={!isTrafficViolations}
                              onCheckedChange={() =>
                                setIsTrafficViolations(false)
                              }
                            />
                          </FormControl>
                          <span className="mx-2">|</span>
                          <FormLabel className="ml-2">نعم</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={isTrafficViolations}
                              onCheckedChange={() =>
                                setIsTrafficViolations(true)
                              }
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="haveMortgage"
                      render={() => (
                        <FormItem>
                          <FormLabel className="flex font-sans">
                            لديك قرض عقارى؟
                          </FormLabel>
                          <FormLabel className="ml-2">لا</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={!haveMortgage}
                              onCheckedChange={() => setHaveMortgage(false)}
                            />
                          </FormControl>
                          <span className="mx-2">|</span>
                          <FormLabel className="ml-2">نعم</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={haveMortgage}
                              onCheckedChange={() => setHaveMortgage(true)}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {haveMortgage === true && (
                      <FormField
                        control={personalForm.control}
                        name="valueOfMortgage"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex font-sans">
                              القرض العقاري
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="placeholder:text-right w-full font-sans text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                {...field}
                                placeholder="ادخل القسط الشهري"
                                disabled={isPending}
                                inputMode="numeric"
                                type="number"
                              />
                            </FormControl>
                            <FormMessage className="font-sans text-right" />
                          </FormItem>
                        )}
                      />
                    )}
                    <FormField
                      name="isVisaInstallment"
                      render={() => (
                        <FormItem>
                          <FormLabel className="flex font-sans">
                            لديك اقساط فيزا ؟
                          </FormLabel>
                          <FormLabel className="ml-2">لا</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={!isVisaInstallments}
                              onCheckedChange={() =>
                                setIsVisaInstallments(false)
                              }
                            />
                          </FormControl>
                          <span className="mx-2">|</span>
                          <FormLabel className="ml-2">نعم</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={isVisaInstallments}
                              onCheckedChange={() =>
                                setIsVisaInstallments(true)
                              }
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {isVisaInstallments === true && (
                      <FormField
                        control={personalForm.control}
                        name="valueOfVisaInstallment"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex font-sans">
                              اقساط الفيزا
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="placeholder:text-right w-full font-sans text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                {...field}
                                placeholder="ادخل القسط الشهري"
                                disabled={isPending}
                                inputMode="numeric"
                                type="number"
                              />
                            </FormControl>
                            <FormMessage className="font-sans text-right" />
                          </FormItem>
                        )}
                      />
                    )}
                    <FormField
                      name="isCarInstallment"
                      render={() => (
                        <FormItem>
                          <FormLabel className="flex font-sans">
                            اقساط سيارة ؟
                          </FormLabel>
                          <FormLabel className="ml-2">لا</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={!isCarInstallment}
                              onCheckedChange={() => setIsCarInstallment(false)}
                            />
                          </FormControl>
                          <span className="mx-2">|</span>
                          <FormLabel className="ml-2">نعم</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={isCarInstallment}
                              onCheckedChange={() => setIsCarInstallment(true)}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {isCarInstallment === true && (
                      <FormField
                        control={personalForm.control}
                        name="valueOfCarInstallment"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex font-sans">
                              قسط السيارة
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="placeholder:text-right w-full font-sans text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                {...field}
                                placeholder="ادخل القسط الشهري"
                                disabled={isPending}
                                inputMode="numeric"
                                type="number"
                              />
                            </FormControl>
                            <FormMessage className="font-sans text-right" />
                          </FormItem>
                        )}
                      />
                    )}
                    <FormField
                      name="isPresonalLoan"
                      render={() => (
                        <FormItem>
                          <FormLabel className="flex font-sans">
                            لديك قرض شخصي ؟
                          </FormLabel>
                          <FormLabel className="ml-2">لا</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={!isPersonalLoan}
                              onCheckedChange={() => setIsPersonalLoan(false)}
                            />
                          </FormControl>
                          <span className="mx-2">|</span>
                          <FormLabel className="ml-2">نعم</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={isPersonalLoan}
                              onCheckedChange={() => setIsPersonalLoan(true)}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {isPersonalLoan === true && (
                      <FormField
                        control={personalForm.control}
                        name="valueOfPersonalLoan"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex font-sans">
                              قسط القرض الشخصي
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="placeholder:text-right w-full font-sans text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                {...field}
                                placeholder="ادخل القسط الشهري"
                                disabled={isPending}
                                inputMode="numeric"
                                type="number"
                              />
                            </FormControl>
                            <FormMessage className="font-sans text-right" />
                          </FormItem>
                        )}
                      />
                    )}
                  </section>
                )}
                {currentIndex === 2 && (
                  <section
                    data-aos="zoom-in"
                    dir="rtl"
                    className=" grid grid-1 lg:grid-cols-2 gap-4 md:grid-cols-2 "
                  >
                    <FormField
                      control={personalForm.control}
                      name="vehicleClass"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex  font-sans">
                            فئة السيارة
                          </FormLabel>
                          <FormControl>
                            <Select
                              dir="rtl"
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="">
                                <SelectValue
                                  className="w-full"
                                  placeholder="فئة السيارة"
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ستاندر">ستاندر</SelectItem>
                                <SelectItem value="نص فل">نص فل</SelectItem>
                                <SelectItem value="فل كامل">فل كامل</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage className="font-sans text-right" />
                        </FormItem>
                      )}
                    ></FormField>
                    <FormField
                      control={personalForm.control}
                      name="yearOfManufacture"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex  font-sans">
                            سنة الصنع
                          </FormLabel>
                          <FormControl>
                            <Select
                              dir="rtl"
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="">
                                <SelectValue
                                  className="w-full"
                                  placeholder="سنة الصنع"
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="2021">2021</SelectItem>
                                <SelectItem value="2022">2022</SelectItem>
                                <SelectItem value="2023">2023</SelectItem>
                                <SelectItem value="2024">2024</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage className="font-sans text-right" />
                        </FormItem>
                      )}
                    ></FormField>
                    <div className=" my-2">
                      <div className="flex gap-2 my-5">
                      <Button
                        onClick={() => setIsSelectCat(true)}
                        className={`rounded-3xl font-sans ${
                          !isSelectCar &&
                          "bg-gray-400 transition-colors duration-700"
                        } text-center`}
                      >
                        اختار السياره
                      </Button>
                      <Button
                        onClick={() => setIsSelectCat(false)}
                        className={`rounded-3xl font-sans ${
                          isSelectCar &&
                          "bg-gray-400 transition-colors duration-700"
                        } text-center`}
                      >
                        سياره الاحلام
                      </Button>
                      </div>
                      {isSelectCar ? (
                        <>
                          <FormField
                            control={personalForm.control}
                            name="brand"
                            render={({ field }) => (
                              <FormItem className=" my-3">
                                <FormLabel className="flex font-sans">
                                  ماركة السيارة
                                </FormLabel>
                                <FormControl>
                                  <Select
                                    dir="rtl"
                                    onValueChange={(value) => {
                                      field.onChange(value);
                                      handleBrandChange(value);
                                    }}
                                    defaultValue={field.value}
                                  >
                                    <SelectTrigger className="">
                                      <SelectValue
                                        className="w-full"
                                        placeholder="اختار ماركة السيارة"
                                      />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {cars.map((car) => (
                                        <SelectItem
                                          key={car.id}
                                          value={car.value}
                                        >
                                          {car.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage className="font-sans text-right" />
                              </FormItem>
                            )}
                          ></FormField>
                          <FormField
                            control={personalForm.control}
                            name="model"
                            render={({ field }) => (
                              <FormItem className="my-3">
                                <FormLabel className="flex font-sans">
                                  موديلات
                                </FormLabel>
                                <FormControl>
                                  <Select
                                    dir="rtl"
                                    onValueChange={field.onChange}
                                    value={field.value}
                                  >
                                    <SelectTrigger className="">
                                      <SelectValue
                                        className="w-full"
                                        placeholder={"اختار الموديل"}
                                      />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {(
                                        cars.find(
                                          (car) => car.value === selectedBrand
                                        )?.sub_options || []
                                      ).map((model) => (
                                        <SelectItem
                                          key={model.id}
                                          value={model.value}
                                        >
                                          {model.value}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage className="font-sans text-right" />
                              </FormItem>
                            )}
                          ></FormField>
                        </>
                      ) : (
                        <>
                        <FormField
                        control={personalForm.control}
                        name="brand"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex font-sans">
                              ماركة السيارة
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="placeholder:text-right w-full font-sans text-right "
                                {...field}
                                placeholder="ماركه السياره"
                                disabled={isPending}
                              />
                            </FormControl>
                            <FormMessage className="font-sans text-right" />
                          </FormItem>
                        )}
                      />
                        <FormField
                        control={personalForm.control}
                        name="model"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex font-sans">
                              موديل السيارة
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="placeholder:text-right w-full font-sans text-right "
                                {...field}
                                placeholder="موديل السيارة"
                                disabled={isPending}
                              />
                            </FormControl>
                            <FormMessage className="font-sans text-right" />
                          </FormItem>
                        )}
                      />
                        </>
                      )}
                    </div>
                  </section>
                )}
                {currentIndex === 3 && (
                  <section
                    dir="rtl"
                    data-aos="zoom-in"
                    className=" grid grid-1  gap-2 "
                  >
                    <FormField
                      name="isAcceptTermsAndPolice"
                      render={() => (
                        <FormItem>
                          <FormLabel className="flex font-sans">
                            الاقرار والموافقة
                          </FormLabel>
                          <FormLabel className="ml-2">
                            نعم قرأت و اوافق على ذلك
                          </FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={isAcceptTermsAndPolice}
                              onCheckedChange={() =>
                                setIsAcceptTermsAndPolice(
                                  (prevChoise) => !prevChoise
                                )
                              }
                            />
                          </FormControl>
                          <div className=" font-light">
                            <TextStyle
                              header=""
                              para="بإرسال بياناتك الشخصية، فأنت تطلب منا التواصل معك لشراء سيارة أو حصولك على تمويل سيارة أو استفسار عن العروض .قد يتم هذا التواصل عبر الهاتف او  استخدام التكنولوجيا الآلية.  فضلا لمعرفة المزيد من التفاصيل حول سياسة الخصوصة لدينا كما، قد يتم التواصل معك من قبل فريق مبيعات بهجة عسير"
                            ></TextStyle>
                          </div>
                        </FormItem>
                      )}
                    />
                  </section>
                )}
              </>
              {currentIndex === 3 && (
                <>
                  <FormError message={error} />
                  <FormSuccess message={success} />
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full font-sans"
                  >
                    انشاء طلب
                  </Button>
                </>
              )}
            </form>
          </Form>
          <section dir="rtl" className="mt-5 flex gap-4">
            {currentIndex < 3 ? (
              <>
                <Button onClick={handleNextClick}>التالي</Button>
                {currentIndex !== 0 && (
                  <Button onClick={handlePrevClick}>السابق</Button>
                )}
              </>
            ) : (
              <>
                {currentIndex !== 0 && (
                  <Button onClick={handlePrevClick}>السابق</Button>
                )}
              </>
            )}
          </section>
        </CardWrapper>
      ) : (
        <CardWrapper
          headerLabel="التمويل للشركات"
          backButtonLabel=""
          backButtonHref=""
        >
          <Form {...companyForm}>
            <form
              onSubmit={companyForm.handleSubmit(onSubmitCompanyFund)}
              className="space-y-6"
            >
              <section
                data-aos="zoom-in"
                dir="rtl"
                className=" grid grid-1 lg:grid-cols-2 gap-4 md:grid-cols-2 "
              >
                <FormField
                  control={companyForm.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex  font-sans">
                        اسم الشركة / المؤسسة
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" placeholder:text-right w-full font-sans text-right"
                          {...field}
                          placeholder="اسم الشركة / المؤسسة"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage className="font-sans text-right" />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={companyForm.control}
                  name="corporateAnniversary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex  font-sans">
                        عمر المنشأة
                      </FormLabel>
                      <FormControl>
                        <Select
                          dir="rtl"
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className=" ">
                            <SelectValue
                              className="w-full"
                              placeholder="اختار عمر المنشأة"
                            />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            <SelectItem value="من سنة الى سنتين">
                              من سنة الى سنتين
                            </SelectItem>
                            <SelectItem value="من سنتين الى خمس سنوات">
                              من سنتين الى خمس سنوات
                            </SelectItem>
                            <SelectItem value="من خمس سنوات الى عشر سنوات">
                              من خمس سنوات الى عشر سنوات
                            </SelectItem>
                            <SelectItem value="اكثر من عشر سنوات">
                              اكثر من عشر سنوات
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="font-sans text-right" />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={companyForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex  font-sans">
                        البريد الالكترونى
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" placeholder:text-right w-full font-sans text-right"
                          {...field}
                          placeholder="John.doe@example.com"
                          type="email"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage className="font-sans text-right" />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={companyForm.control}
                  name="zone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex  font-sans">
                        مقر الشركة / المؤسسة
                      </FormLabel>
                      <FormControl>
                        <Select
                          dir="rtl"
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="">
                            <SelectValue
                              className="w-full"
                              placeholder="اختار المنطقة"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="المنطقة الشمالية">
                              المنطقة الشمالية
                            </SelectItem>
                            <SelectItem value="المنطقه الجنوبية">
                              المنطقه الجنوبية
                            </SelectItem>
                            <SelectItem value="المنطقه الشرقية">
                              المنطقه الشرقية
                            </SelectItem>
                            <SelectItem value="المنطقه الغربية">
                              المنطقه الغربية
                            </SelectItem>
                            <SelectItem value="المنطقه الوسطي">
                              المنطقه الوسطي
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="font-sans text-right" />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={companyForm.control}
                  name="mobileNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex  font-sans">
                        الهاتف / الجوال
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" placeholder:text-right w-full font-sans text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          {...field}
                          disabled={isPending}
                          placeholder="الهاتف / الجوال"
                          type="number"
                        />
                      </FormControl>
                      <FormMessage className="font-sans text-right" />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={companyForm.control}
                  name="telNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex  font-sans">
                        رقم الهاتف الثابت (اختياري )
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" placeholder:text-right w-full font-sans text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          {...field}
                          disabled={isPending}
                          placeholder="رقم الهاتف الثابت (اختياري )"
                          type="number"
                        />
                      </FormControl>
                      <FormMessage className="font-sans text-right" />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={companyForm.control}
                  name="bank"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex  font-sans">البنك</FormLabel>
                      <FormControl>
                        <Select
                          dir="rtl"
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="">
                            <SelectValue placeholder="اختار البنك" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            <SelectItem value="مصرف الراجحي">
                              مصرف الراجحي
                            </SelectItem>
                            <SelectItem value="البنك الاهلي">
                              البنك الاهلي
                            </SelectItem>
                            <SelectItem value="بنك البلاد">
                              بنك البلاد
                            </SelectItem>
                            <SelectItem value="بنك الانماء">
                              بنك الانماء
                            </SelectItem>
                            <SelectItem value="البنك العربي الوطني">
                              البنك العربي الوطني
                            </SelectItem>
                            <SelectItem value="البتك السعودي الفرنسي">
                              البتك السعودي الفرنسي
                            </SelectItem>
                            <SelectItem value="بنك الامارات">
                              بنك الامارات
                            </SelectItem>
                            <SelectItem value="البنك الاول">
                              البنك الاول
                            </SelectItem>
                            <SelectItem value="بنك الرياض">
                              بنك الرياض
                            </SelectItem>
                            <SelectItem value="يتك الاستثمار">
                              يتك الاستثمار
                            </SelectItem>
                            <SelectItem value="بنك الجزيرة">
                              بنك الجزيرة
                            </SelectItem>
                            <SelectItem value="البنك السعودي الهولندي">
                              البنك السعودي الهولندي
                            </SelectItem>
                            <SelectItem value="البنك السعودي البريطاني">
                              البنك السعودي البريطاني
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="font-sans text-right" />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={companyForm.control}
                  name="countOfCars"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex  font-sans">
                        عدد السيارات
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" placeholder:text-right w-full font-sans text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          {...field}
                          disabled={isPending}
                          placeholder="عدد السيارات"
                          type="number"
                        />
                      </FormControl>
                      <FormMessage className="font-sans text-right" />
                    </FormItem>
                  )}
                ></FormField>
              </section>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button
                type="submit"
                disabled={isPending}
                className="w-full font-sans"
              >
                انشاء طلب
              </Button>
            </form>
          </Form>
        </CardWrapper>
      )}
    </main>
  );
};
