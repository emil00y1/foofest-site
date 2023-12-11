import Image from "next/image";
import Link from "next/link";

function ArtistCard({ act, start, end, imageSrc, slug }) {
  const img = imageSrc.startsWith("https")
    ? imageSrc
    : "http://https://stump-impossible-trail.glitch.me/logos/" + imageSrc;
  return (
    <Link href={`/lineup/${slug}`} prefetch={false}>
      <article className="bg-extradark rounded p-2 flex">
        <Image src={img} width={150} height={150} alt={"image of " + act} />
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
