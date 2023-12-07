import Image from "next/image";

function ArtistCard({ act, start, end }) {
  return (
    <article className="bg-extradark rounded-lg p-4 flex">
      <Image src="" alt={act} />
      <div>
        <h2 className="uppercase">{act}</h2>
        <p>hvad skal der stå her?</p>
      </div>
      <div className="ml-auto">
        <p className="text-yellowaccent">{start}</p>
        <p>{end}</p>
      </div>
    </article>
  );
}

export default ArtistCard;
