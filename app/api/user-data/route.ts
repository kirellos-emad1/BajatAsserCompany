import { getAllUsers } from "@/data-access/user";

export async function GET() {
    const allUserData = await getAllUsers();

    return new Response(JSON.stringify(allUserData), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}
