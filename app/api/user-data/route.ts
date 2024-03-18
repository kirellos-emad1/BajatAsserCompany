import { getAllUsers } from "@/data-access/user";
export async function GET(request:Request) {
    const allUserData = await getAllUsers();

    return Response.json(allUserData)
}
