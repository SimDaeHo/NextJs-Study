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

export async function getFruit(id: string): Promise<Fruits | undefined> {
  const fruits = await getFruits();
  return fruits.find((item) => item.id === id);
}
