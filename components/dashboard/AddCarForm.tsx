"use client";
import * as z from "zod";
import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "@/components/dashboard/CardWrapper";
import { AddCar } from "@/schemas";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { addCar } from "@/actions/addCar";
import { useSession } from "next-auth/react";
import { uploadCloudinary } from "@/lib/uploadCloudinary";

export const AddCarForm = () => {
  const session = useSession();
  const id = session.data?.user.id!;
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [images, setImages] = useState<FileList | null>(null);
  const [addToMainPage, setAddToMainPage] = useState<boolean>(false);

  const [isPending, startTransition] = useTransition();
  const submitImage = async () => {
    let arr: Array<string> = [];
    if (!images) return;
    for (let i = 0; i < images.length; i++) {
      try {
        const data = await uploadCloudinary(images[i]);
        arr.push(data.url);
      } catch (uploadError) {
        console.error("Error uploading an image:", uploadError);
      }
    }
    return arr;
  };

  const onSubmit = async (values: z.infer<typeof AddCar>) => {
    const arr = await submitImage();
    console.log(arr);
    setError("");
    setSuccess("");
    startTransition(() => {
      addCar({ ...values, images: arr, addToMainPage: addToMainPage }, id).then(
        (data) => {
          setError(data?.error);
          setSuccess(data?.success);
          if (data.success) {
            form.reset();
            setImages(null);
          }
        }
      );
    });
  };
  const form = useForm<z.infer<typeof AddCar>>({
    resolver: zodResolver(AddCar),
    defaultValues: {
      brand: "",
      model: "",
      vehicleClass: "",
      yearOfManufacture: "",
      fuelType: "",
      engineCapacity: "",
      price: "",
      transmission: "",
      AutomotivePropulsionSystems: "",
    },
  });
  return (
    <CardWrapper>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <section dir="ltr" className=" space-y-2">
            <section
              dir="rtl"
              className=" grid grid-1 lg:grid-cols-2 gap-4 md:grid-cols-2 "
            >
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex  font-sans">
                      ماركة السيارة
                    </FormLabel>
                    <FormControl>
                      <Input
                        className=" placeholder:text-right text-right"
                        {...field}
                        placeholder="ماركة السيارة"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage className="font-sans text-right" />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex  font-sans">
                      موديل السيارة
                    </FormLabel>
                    <FormControl>
                      <Input
                        className=" placeholder:text-right font-sans text-right"
                        {...field}
                        placeholder="موديل السيارة"
                        type="text"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage className="font-sans text-right" />
                  </FormItem>
                )}
              ></FormField>
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
                    <FormLabel className="flex  font-sans">سنة الصنع</FormLabel>
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
              <FormField
                control={form.control}
                name="horsePower"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex  font-sans">
                      القدره الحصانيه (اختياري)
                    </FormLabel>
                    <FormControl>
                      <Input
                        className=" placeholder:text-right text-right"
                        {...field}
                        placeholder="القدره الحصانيه (اختياري)"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage className="font-sans text-right" />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="fuelType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex  font-sans">
                      نوع الوقود
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
                            placeholder="نوع الوقود"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="بنزين">بنزين</SelectItem>
                          <SelectItem value="ديزل">ديزل</SelectItem>
                          <SelectItem value="كهرباء">كهرباء</SelectItem>
                          <SelectItem value="هايبرد">هايبرد</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="font-sans text-right" />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="engineCapacity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex  font-sans">
                      سعه المحرك
                    </FormLabel>
                    <FormControl>
                      <Input
                        className=" placeholder:text-right text-right"
                        {...field}
                        placeholder="سعه المحرك"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage className="font-sans text-right" />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="transmission"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex  font-sans">
                      ناقل الحركة
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
                            placeholder="ناقل الحركة"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="اوتوماتيك">اوتوماتيك</SelectItem>
                          <SelectItem value="مانيوال">مانيوال</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="font-sans text-right" />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex  font-sans">
                      السعر (اختياري)
                    </FormLabel>
                    <FormControl>
                      <Input
                        className=" placeholder:text-right text-right"
                        {...field}
                        placeholder="السعر (اختياري)"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage className="font-sans text-right" />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="AutomotivePropulsionSystems"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex  font-sans">
                      نظام التحكم في الجر
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
                            placeholder="نظام التحكم في الجر"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="جر امامي">جر امامي</SelectItem>
                          <SelectItem value="دفع خلفي">دفع خلفي</SelectItem>
                          <SelectItem value="دفع رباعي">دفع رباعي</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="font-sans text-right" />
                  </FormItem>
                )}
              ></FormField>
            </section>
            <section dir="rtl" className=" grid grid-1  space-y-4 gap-4 ">
              <FormField
                name="images"
                render={() => (
                  <FormItem>
                    <FormLabel className="flex  font-sans">
                      صور السياره
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        disabled={isPending}
                        placeholder="اختار الصور"
                        multiple={true}
                        accept="image/*"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setImages(e.target.files)
                        }
                        className="w-1/2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                name="addToMainPage"
                render={() => (
                  <FormItem>
                    <FormLabel className="flex font-sans">
                      هل تريد عرض السياره ف الصفحه الرئسيه
                    </FormLabel>
                    <FormLabel className="ml-2">لا</FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={!addToMainPage}
                        onCheckedChange={() => setAddToMainPage(false)}
                      />
                    </FormControl>
                    <span className="mx-2">|</span>
                    <FormLabel className="ml-2">نعم</FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={addToMainPage}
                        onCheckedChange={() => setAddToMainPage(true)}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </section>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              type="submit"
              disabled={isPending}
              className="w-full font-sans "
            >
              اضافه السيارة
            </Button>
          </section>
        </form>
      </Form>
    </CardWrapper>
  );
};
