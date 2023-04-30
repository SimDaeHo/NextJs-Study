"use client";

import { useRouter } from "next/navigation";

export default function GoFruitsButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/fruits");
      }}
    >
      과일 페이지로 이동
    </button>
  );
}
