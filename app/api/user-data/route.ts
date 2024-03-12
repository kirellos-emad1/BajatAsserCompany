import { getAllUsers } from "@/data-access/user";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    const allUserData = await getAllUsers();
    
    return NextResponse.json(allUserData);
}
