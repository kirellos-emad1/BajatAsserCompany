import { getAllCarsInMainPage } from "@/data-access/cars";
import { NextApiRequest, NextApiResponse } from "next";


export async function GET(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const allCars = await getAllCarsInMainPage();

    return Response.json(allCars)
}
