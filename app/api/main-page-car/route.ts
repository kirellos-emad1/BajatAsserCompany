import { getAllCarsInMainPage } from "@/data-access/cars";
import { NextResponse } from 'next/server'


export async function handlers(

) {
    const allCars = await getAllCarsInMainPage();

    return Response.json(allCars)
}
export {handlers as GET}
