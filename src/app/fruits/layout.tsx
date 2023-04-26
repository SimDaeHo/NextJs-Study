import Link from "next/link";
import styles from "./layout.module.css";

export const metadata = {
  title: "맛있는 과일 정보 사이트 | 전체 과일 확인",
  description: "맛있는 과일을 구경해 보세요.",
};

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
