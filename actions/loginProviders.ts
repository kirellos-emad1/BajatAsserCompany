"use server"
import { signIn } from "@/auth"

export const loginProvider= async(provider:"google"|"facebook")=>{
    await signIn(provider,{
        redirectTo: "/"
    })
}