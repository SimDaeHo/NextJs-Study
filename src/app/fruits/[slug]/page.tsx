import { getFruit, getFruits } from "@/service/Fruits";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 3;

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
export default async function FruitPage({ params: { slug } }: Props) {
  const fruit = await getFruit(slug);

  if (!fruit) {
    notFound();
  }
  return (
    <>
      <h1>{fruit.name} 설명 페이지!</h1>
      <Image src={`/images/${fruit.image}`} alt={fruit.name} width={300} height={300} />
    </>
  );
}

export async function generateStaticParams() {
  const fruits = await getFruits();
  return fruits.map((fruits) => ({
    slug: fruits.id,
  }));
}
