import { getAllCars } from "@/data-access/cars";
import { NextApiRequest, NextApiResponse } from "next";

export async function  GET(
    req: NextApiRequest,
    res: NextApiResponse
  ) { 
       const allCars = await getAllCars();
    
       return Response.json(allCars)
    }
