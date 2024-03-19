import { getAllUsers } from "@/data-access/user";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
    const allUsers = await getAllUsers();

    return NextResponse.json(allUsers)

}
