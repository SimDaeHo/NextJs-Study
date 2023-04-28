"use client";
import { useEffect, useState } from "react";
import styles from "./Content.module.css";
export default function Content() {
  const [text, setText] = useState("데이터 준비중...");
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setText(data.content));
  }, []);
  return <article className={styles.article}>{text}</article>;
}
