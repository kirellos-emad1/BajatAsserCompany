import { getAllCarsInMainPage } from "@/data-access/cars";
import { NextResponse } from 'next/server'


export async function GET(

) {
    const allCars = await getAllCarsInMainPage();

    return NextResponse.json(allCars)
}
