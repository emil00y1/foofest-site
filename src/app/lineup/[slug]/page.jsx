import Image from "next/image";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:8080/bands/");

  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const res = await fetch(`http://localhost:8080/bands/${slug}`);

  const data = await res.json();

  return {
    title: data.name,
  };
}

export default async function slug({ params }) {
  const { slug } = params;

  const res = await fetch(`http://localhost:8080/bands/${slug}`);
  const data = await res.json();

  const img = data.logo.startsWith("https") ? data.logo : "http://localhost:8080/logos/" + data.logo;

  return (
    <>
      <Image src={img} alt={data.name} width="200" height="200"></Image>
      <p>{data.logoCredits}</p>
      <h1>{data.name}</h1>
      <p>{data.genre}</p>
      <ul>
        {data.members.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
      <p>{data.bio}</p>
    </>
  );
}
