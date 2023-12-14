import Image from "next/image";
import Link from "next/link";

function ArtistCard({ act, start, end, imageSrc, slug, stage }) {
  const img = imageSrc.startsWith("https") ? imageSrc : "http://localhost:8080/logos/" + imageSrc;
  return (
    <Link href={`/lineup/${slug}`} prefetch={false}>
      <article className="bg-extradark rounded flex">
        <Image src={img} width={150} height={150} alt={"image of " + act} />
        <div>
          <div>
            <h2 className="uppercase">{act}</h2>
            <p>{stage}</p>
          </div>
          <div className="ml-auto">
            <p className="text-yellowaccent">{start}</p>
            <p>{end}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ArtistCard;
