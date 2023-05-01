import Image from "next/image";
import os from "os"; // 노드 APIs
import Counter from "@/components/Counter";

export default function Home() {
  console.log("과일!");
  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지다!!-버전2</h1>
      <Counter />
      <Image src="https://img.freepik.com/premium-photo/red-apples-isolated-white-background-ripe-fresh-apples-clipping-path-apple-with-leaf_299651-595.jpg?w=826" alt="apple" width={400} height={400} />
    </>
  );
}
