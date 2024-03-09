"use server"
import { db } from "@/lib/db";
import * as z from "zod";
import { FundSchema } from "@/schemas";

export const createFundProfile = async (values: z.infer< typeof FundSchema>)=>{
    console.log(values)
}
