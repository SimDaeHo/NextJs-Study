import styles from "./layout.module.css";

export default function FruitsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <a href="">사과</a>
        <a href="">바나나</a>
      </nav>
      <section className={styles.fruit}>{children}</section>
    </>
  );
}
