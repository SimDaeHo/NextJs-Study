import Link from "next/link";
import styles from "./layout.module.css";
import { getFruits } from "@/service/Fruits";
import Content from "@/components/Content";
import meloneImage from "../../../public/images/melon.jpg";
import Image from "next/image";

// export const revalidate = 3;

export default async function FruitsPage() {
  const fruits = await getFruits();

  return (
    <>
      <h1>과일소개 페이지!</h1>
      <Image src={meloneImage} alt="Melon" />
      <ul>
        {fruits.map((fruits, index) => (
          <li className={styles.li} key={index}>
            <Link href={`/fruits/${fruits.id}`}>{fruits.name}</Link>
          </li>
        ))}
      </ul>
      <Content />
    </>
  );
}
