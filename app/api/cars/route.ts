import { getAllCars } from "@/data-access/cars";
import { NextResponse } from "next/server";


export async function GET(

) {
    const allCars = await getAllCars();

    return Response.json(allCars)
}
