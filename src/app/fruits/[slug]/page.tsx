type Props = {
  params: {
    slug: string;
  };
};

export default function bananaPage({ params }: Props) {
  return <h1>{params.slug} 설명 페이지!</h1>;
}
