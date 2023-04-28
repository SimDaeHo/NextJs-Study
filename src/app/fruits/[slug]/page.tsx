import { getFruit, getFruits } from "@/service/Fruits";
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
export default function bananaPage({ params: { slug } }: Props) {
  const fruit = getFruit(slug);

  if (!fruit) {
    notFound();
  }
  return <h1>{fruit} 설명 페이지!</h1>;
}

export function generateStaticParams() {
  const fruits = getFruits();
  return fruits.map((fruits) => ({
    slug: fruits,
  }));
}
