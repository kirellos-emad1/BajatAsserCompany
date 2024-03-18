"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

import { getUserByEmail } from "@/data-access/user";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "الحقول غير صالحة" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email)
  if(!existingUser || !existingUser.email|| !existingUser.password){
    return {error: "البريد الإلكتروني غير موجود"}
  }


  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });

    return { success: ' تم تسجيل الدخول بنجاح' }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "ألبيانات غير صحيحة" };
        default:
          return { error: "هناك خطأ ما!" };
      }
    }
    throw error;
  }
};
