import { getAllUsers } from "@/data-access/user";
export async function handlers(request:Request) {
    const allUserData = await getAllUsers();

    return Response.json(allUserData)
}

export {handlers as GET}