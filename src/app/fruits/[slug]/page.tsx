type Props = {
  params: {
    slug: string;
  };
};

export default function bananaPage({ params }: Props) {
  return <h1>바나나 설명 페이지!</h1>;
}
