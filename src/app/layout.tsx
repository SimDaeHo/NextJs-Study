import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata = {
  title: "맛있는 과일 정보 사이트",
  description: "맛있는 과일을 판매하는 곳입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
          <h1>Daeho Memo</h1>
          <nav className={styles.nav}>
            <Link href="/fruits">Fruits</Link>
            <Link href="/apple">Apple</Link>
            <Link href="/banana">Banana</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
