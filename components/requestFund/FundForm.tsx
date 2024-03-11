"use client";
import * as z from "zod";
import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "@/components/requestFund/CardWrapper";
import { FundSchema } from "@/schemas";
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

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

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
  };
  const form = useForm<z.infer<typeof FundSchema>>({
    resolver: zodResolver(FundSchema),
    defaultValues: {
      email: "",
      mobileNumber: "",
      name: "",
      personalId: "",
      city: "",
      resident: "",
      workSector: "",
      salary: "",
      bank: "",
      // trafficViolations: false,
      // disability: false,
      // visaInstallments: false,
      // personalLoan: false,
      // carInstallment: false,
      // termsAndPolice: false,
      // valueOfMortgage: "",
      // valueOfVisaInstallment: "",
      // valueOfPersonalLoan: "",
      // valueOfCarInstallment: "",
      vehicleClass: "",
      yearOfManufacture: "",
      brand: "",
      model: "",
    },
  });
  return (
    <main dir="ltr" className="p-20">
      <CardWrapper headerLabel="" backButtonLabel="" backButtonHref="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <>
              {currentIndex === 0 && (
                <section
                  dir="rtl"
                  className=" grid grid-1 lg:grid-cols-3 gap-4 md:grid-cols-2 "
                >
                  <FormField
                    control={form.control}
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
                    control={form.control}
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
                    control={form.control}
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
                    control={form.control}
                    name="personalId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex  font-sans">
                          رقم الهويه الشخصيه
                        </FormLabel>
                        <FormControl>
                          <Input
                            className=" placeholder:text-right w-full font-sans text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            {...field}
                            disabled={isPending}
                            placeholder="رقم الهويه الشخصيه"
                            inputMode="numeric"
                            type="number"
                          />
                        </FormControl>
                        <FormMessage className="font-sans text-right" />
                      </FormItem>
                    )}
                  ></FormField>
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex  font-sans">
                          المدينة
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
                                placeholder="اختار المدينه"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              {cites.map((city) => {
                                return (
                                  <SelectItem
                                    key={city.region_id}
                                    value={city.name_ar}
                                  >
                                    {city.name_ar}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage className="font-sans text-right" />
                      </FormItem>
                    )}
                  ></FormField>
                  <FormField
                    control={form.control}
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
                    control={form.control}
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
                              <SelectItem value="قطاع خاص">قطاع خاص</SelectItem>
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
                  dir="rtl"
                  className=" grid grid-1 lg:grid-cols-2 gap-4 md:grid-cols-2 "
                >
                  <FormField
                    control={form.control}
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
                    control={form.control}
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
                            onCheckedChange={() => setIsTrafficViolations(true)}
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
                      control={form.control}
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
                            onCheckedChange={() => setIsVisaInstallments(false)}
                          />
                        </FormControl>
                        <span className="mx-2">|</span>
                        <FormLabel className="ml-2">نعم</FormLabel>
                        <FormControl>
                          <Checkbox
                            checked={isVisaInstallments}
                            onCheckedChange={() => setIsVisaInstallments(true)}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {isVisaInstallments === true && (
                    <FormField
                      control={form.control}
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
                      control={form.control}
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
                      control={form.control}
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
                  dir="rtl"
                  className=" grid grid-1 lg:grid-cols-2 gap-4 md:grid-cols-2 "
                >
                  <FormField
                    control={form.control}
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
                    control={form.control}
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
                  <div className=" my-4">
                    <FormField
                      control={form.control}
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
                                  <SelectItem key={car.id} value={car.value}>
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
                      control={form.control}
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
                  </div>
                </section>
              )}
              {currentIndex === 3 && (
                <section dir="rtl" className=" grid grid-1  gap-2 ">
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
    </main>
  );
};
