import Link from "next/link";
import styles from "./layout.module.css";

const fruits = ["orange", "melon", "peach", "lemon"];

export default function FruitsPage() {
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
