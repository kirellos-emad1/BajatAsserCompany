import { getAllCars } from "@/data-access/cars";
import { NextResponse } from "next/server";


export async function handlers(

) {
    const allCars = await getAllCars();

    return Response.json(allCars)
}
export {handlers as GET}
