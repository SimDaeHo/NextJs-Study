import Link from "next/link";
import styles from "./layout.module.css";
import { getFruits } from "@/service/Fruits";

export default function FruitsPage() {
  const fruits = getFruits();
  return (
    <>
      <h1>과일소개 페이지!</h1>
      <ul>
        {fruits.map((fruits, index) => (
          <li className={styles.li} key={index}>
            <Link href={`/fruits/${fruits}`}>{fruits}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
