"use client";
import * as z from "zod";
import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "@/components/auth/CardWrapper";
import { RegisterSchema } from "@/schemas";
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
import { register } from "@/actions/register";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
        if (data.success) {
          form.reset();
        }
      });
    });
  };
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });
  return (
    <CardWrapper
      headerLabel="انشاء حساب"
      backButtonLabel=" لديك حساب بالفعل ؟"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-row-reverse font-sans">
                    الاسم
                  </FormLabel>
                  <FormControl>
                    <Input
                      className=" placeholder:text-right text-right"
                      {...field}
                      placeholder="اسم المستخدم"
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
                  <FormLabel className="flex flex-row-reverse font-sans">
                    البريد الالكترونى
                  </FormLabel>
                  <FormControl>
                    <Input
                      className=" placeholder:text-right font-sans text-right"
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-row-reverse font-sans">
                    كلمة المرور
                  </FormLabel>
                  <FormControl>
                    <Input
                      className=" placeholder:text-right text-right"
                      {...field}
                      disabled={isPending}
                      placeholder="********"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage className="font-sans text-right" />
                </FormItem>
              )}
            ></FormField>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            disabled={isPending}
            className="w-full font-sans"
          >
            انشاء حساب
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
