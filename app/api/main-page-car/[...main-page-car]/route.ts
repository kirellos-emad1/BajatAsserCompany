import { getAllCarsInMainPage } from "@/data-access/cars";

export async function GET() {
    const allCars = await getAllCarsInMainPage();

    return new Response(JSON.stringify(allCars), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}
