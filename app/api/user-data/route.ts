import { getAllUsers } from "@/data-access/user";
import { NextResponse } from "next/server";
export async function GET() {
    const allUserData = await getAllUsers();

return NextResponse.json(allUserData)
}
