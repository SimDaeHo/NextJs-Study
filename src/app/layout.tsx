import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

import { Open_Sans } from "@next/font/google";
import { Nanum_Gothic } from "@next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
});
export const metadata = {
  title: "맛있는 과일 정보 사이트",
  description: "맛있는 과일을 판매하는 곳입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
          <h1 className={gothic.className}>Daeho Memo</h1>
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
