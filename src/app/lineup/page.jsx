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
  const [day, setDay] = useState("h");
  const [stage, setStage] = useState(["heyy", "oj"]);
  useEffect(() => {
    const x = async () => {
      const data = await fetchFunc();
      const filteredData = data.Midgard.sun;
      setBands((o) => o.concat(filteredData));
    };
    x();
    x;
  }, []);

  console.log("setBands", bands);

  return (
    <main>
      <Headline>Lineup</Headline>
      <LineupNav setDay={setDay} setStage={setStage}></LineupNav>
      <section className="p-3 flex flex-col gap-3">
        {bands.map((band) => (
          <ArtistCard act={band.act} start={band.start} end={band.end} key={band.act}></ArtistCard>
        ))}
      </section>
    </main>
  );
}

export default Lineup;
