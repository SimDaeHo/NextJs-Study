import Link from "next/link";

export default function FruitsPage() {
  return (
    <>
      <h1>과일소개 페이지!</h1>
      <ul>
        <Link href="/fruits/orange">
          <li>orange</li>
        </Link>
        <Link href="/fruits/melon">
          <li>melon</li>
        </Link>
        <Link href="/fruits/peach">
          <li>peach</li>
        </Link>
        <Link href="/fruits/lemon">
          <li>lemon</li>
        </Link>
      </ul>
    </>
  );
}
