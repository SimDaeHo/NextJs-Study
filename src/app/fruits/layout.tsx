import Link from "next/link";
import styles from "./layout.module.css";

export default function FruitsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/fruits/apple">사과</Link>
        <Link href="/fruits/banana">바나나</Link>
      </nav>
      <section className={styles.fruit}>{children}</section>
    </>
  );
}
