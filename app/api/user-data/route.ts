import { getAllUsers } from "@/data-access/user";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(
    req: NextApiRequest,
    res: NextApiResponse
) {    const allUserData = await getAllUsers();
    
    return Response.json(allUserData)
}
