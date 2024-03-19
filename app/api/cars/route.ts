import { getAllCars } from "@/data-access/cars";

export async function GET() {
    const allCars = await getAllCars();

    return new Response(JSON.stringify(allCars), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}
