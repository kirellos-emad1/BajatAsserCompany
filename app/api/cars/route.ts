import { getAllCars } from "@/data-access/cars";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(

) {
    const allCars = await getAllCars();

    return NextResponse.json(allCars)
}
