import Image from "next/image";

export default async function slug() {
  const res = await fetch("http://localhost:8080/bands/tool");
  const data = await res.json();

  const img = data.logo.startsWith("https") ? data.logo : "http://localhost:8080/logos/" + data.logo;

  return (
    <>
      <Image src="https://source.unsplash.com/random/720x480?random=30038" alt={data.name} width="200" height="200"></Image>
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
