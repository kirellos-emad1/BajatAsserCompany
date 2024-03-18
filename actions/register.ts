"use server";

import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data-access/user";
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { password, email, name } = validatedFields.data;

  const hashedPassword = await bcryptjs.hash(password, 10);

  const existingUser = await getUserByEmail(email)
  if (existingUser) return { error: "البريد الاليكتروني مستخدم" };
  try {

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return { success: ' تم انشاء الحساب بنجاح' }


  } catch (err) {
    console.log(err)
    return { error: "حدث خطاء" }

  }

};
