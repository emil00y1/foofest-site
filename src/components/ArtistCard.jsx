import Image from "next/image";
import Link from "next/link";

function ArtistCard({ act, start, end }) {
  return (
    <Link href="/lineup/hardcoded-slug">
      <article className="bg-extradark rounded p-2 flex">
        <Image src="" alt="" />
        <div>
          <h2 className="uppercase">{act}</h2>
          <p>hvad skal der stå her?</p>
        </div>
        <div className="ml-auto">
          <p className="text-yellowaccent">{start}</p>
          <p>{end}</p>
        </div>
      </article>
    </Link>
  );
}

export default ArtistCard;
