import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `과일의 이름:${params.slug}`,
  };
}
export default function bananaPage({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }
  return <h1>{params.slug} 설명 페이지!</h1>;
}

export function generateStaticParams() {
  const fruits = ["apple", "banana"];
  return fruits.map((fruits) => ({
    slug: fruits,
  }));
}
