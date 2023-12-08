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
  const [stages, setStages] = useState([]);
  const [selectedDay, setSelectedDay] = useState("sun");
  const [selectedStage, setSelectedStage] = useState("Midgard");

  useEffect(() => {
    const x = async () => {
      const data = await fetchFunc();
      console.log("artist", data.Midgard.selectedDay);
      // Memoize the filtered data function to ensure it's recalculated only when necessary
      const getFilteredData = () => {
        const filteredData = data[selectedStage][selectedDay];
        return filteredData;
      };

      const bands = getFilteredData();
      setBands(bands);
    };
    x();
    x;
  }, [selectedDay, selectedStage]);

  useEffect(() => {
    const x = async () => {
      const data = await fetchFunc();
      console.log("data", data);
      const stageKeys = Object.keys(data);
      setStages((o) => o.concat(stageKeys));
    };
    x();
    x;
  }, []);

  console.log("setBands", bands);
  return (
    <main>
      <Headline>Lineup</Headline>
      <LineupNav
        stages={stages}
        setSelectedDay={setSelectedDay}
        setSelectedStage={setSelectedStage}
      ></LineupNav>
      <section className="p-3">
        {bands.map((band) => (
          <ArtistCard
            act={band.act}
            start={band.start}
            end={band.end}
          ></ArtistCard>
        ))}
      </section>
    </main>
  );
}

export default Lineup;
