import Link from "next/link";
import styles from "./layout.module.css";
import { getFruits } from "@/service/Fruits";

export const revalidate = 3;

export default async function FruitsPage() {
  const fruits = await getFruits();
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();
  const ranDom = data.content;
  return (
    <>
      <h1>과일소개 페이지!</h1>
      <ul>
        {fruits.map((fruits, index) => (
          <li className={styles.li} key={index}>
            <Link href={`/fruits/${fruits.id}`}>{fruits.name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{ranDom}</article>
    </>
  );
}
