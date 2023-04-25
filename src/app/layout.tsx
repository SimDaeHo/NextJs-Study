import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <h1>Daeho Memo</h1>
          <nav>
            <a href="">Apple</a>
            <a href="">Banana</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
