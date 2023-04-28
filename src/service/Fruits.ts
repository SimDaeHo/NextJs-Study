import path from "path";
import { promises as fs } from "fs";

export type Fruits = {
  id: string;
  name: string;
  price: string;
};

export async function getFruits(): Promise<Fruits[]> {
  const filePath = path.join(process.cwd(), "data", "fruits.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export function getFruit(id: string) {
  return "orange";
}
