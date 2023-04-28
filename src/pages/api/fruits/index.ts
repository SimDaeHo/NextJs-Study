// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Fruits, getFruits } from "@/service/Fruits";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Fruits[]>) {
  if (req.method === "GET") {
    const fruits = await getFruits();
    return res.status(200).json(fruits);
  }
  res.status(200);
}
