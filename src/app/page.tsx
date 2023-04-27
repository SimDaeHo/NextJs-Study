import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("과일!");
  return <h1>홈페이지다!!</h1>;
}
