"use client";

import Headline from "@/components/Headline";
import LineupNav from "@/components/LineupNav";
import ArtistCard from "@/components/ArtistCard";
import { useState, useEffect } from "react";

async function fetchFunc() {
  const res = await fetch("http://localhost:8080/schedule");
  const data = await res.json();
  return data;
}

function Lineup() {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    const x = async () => {
      const data = await fetchFunc();
      console.log("artist", data.Midgard.fri);
      const filteredData = data.Midgard.fri;
      setBands((o) => o.concat(filteredData));
    };
    x();
    x;
  }, []);

  console.log("setBands", bands);

  return (
    <main>
      <Headline>Lineup</Headline>
      <LineupNav></LineupNav>
      <section className="p-3">
        {bands.map((band) => (
          <ArtistCard act={band.act} start={band.start} end={band.end}></ArtistCard>
        ))}
      </section>
    </main>
  );
}

export default Lineup;
