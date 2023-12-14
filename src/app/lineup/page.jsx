"use client";

import Headline from "@/components/Headline";
import LineupNav from "@/components/LineupNav";
import ArtistCard from "@/components/ArtistCard";
import { useState, useEffect } from "react";

async function fetchScheduleFunc() {
  const res = await fetch("http://localhost:8080/schedule");
  const data = await res.json();
  return data;
}
async function fetchBandsFunc() {
  const res = await fetch("http://localhost:8080/bands");
  const data = await res.json();
  return data;
}

function Lineup() {
  const [bands, setBands] = useState([]);
  const [bandData, setBandData] = useState([]);
  const [stages, setStages] = useState([]);
  const [selectedDay, setSelectedDay] = useState("sun");
  const [selectedStage, setSelectedStage] = useState("Midgard");

  useEffect(() => {
    const x = async () => {
      const data = await fetchScheduleFunc();

      // Memoize the filtered data function to ensure it's recalculated only when necessary
      const getFilteredData = () => {
        if (selectedStage === "AllStages") {
          // If selectedStage is "AllStages", consider all stages
          const allStagesData = Object.values(data).flatMap((stageData) => stageData[selectedDay]);
          return allStagesData;
        } else {
          // Otherwise, filter data based on selectedStage and selectedDay
          const filteredData = data[selectedStage][selectedDay];
          return filteredData;
        }
      };

      const bands = getFilteredData();
      setBands(bands);
    };
    x();
  }, [selectedDay, selectedStage]);

  useEffect(() => {
    const x = async () => {
      const data = await fetchBandsFunc();
      console.log("data", data);
      setBandData((o) => o.concat(data));
    };
    x();
    x;
  }, []);

  useEffect(() => {
    const x = async () => {
      const data = await fetchScheduleFunc();
      console.log("data", data);
      const stageKeys = Object.keys(data);
      setStages((o) => o.concat(stageKeys));
    };
    x();
    x;
  }, []);

  console.log("bandData", bandData);
  return (
    <main className="max-w-7xl md:m-auto">
      <Headline>Lineup</Headline>
      <LineupNav stages={stages} setSelectedDay={setSelectedDay} setSelectedStage={setSelectedStage} selectedDay={selectedDay} selectedStage={selectedStage}></LineupNav>
      <section className="p-3 flex flex-col gap-2 mt-3">
        {bandData.length > 0 ? (
          bands.map((band) => {
            const artistName = band.act;

            // Skip rendering if artistName is "break"
            if (artistName.toLowerCase() === "break") {
              return null;
            }

            const matchingBand = bandData.find((bandData) => bandData.name === artistName);

            // Check if matchingBand is not undefined before accessing its properties
            const matchingPhotoUrl = matchingBand ? matchingBand.logo : null;
            const matchingPhotoCredit = matchingBand ? matchingBand.logoCredits : null;

            const splitCredit = matchingPhotoCredit ? matchingPhotoCredit.split(", https") : [null];
            const creditText = splitCredit[0];
            const creditLink = "https" + splitCredit[1];

            return (
              <ArtistCard
                imageSrc={matchingPhotoUrl}
                act={band.act}
                start={band.start}
                end={band.end}
                key={band.act}
                slug={matchingBand.slug}
                stage={selectedStage}
                creditText={creditText}
                creditLink={creditLink}
              ></ArtistCard>
            );
          })
        ) : (
          <p>No band data available</p>
        )}
      </section>
    </main>
  );
}

export default Lineup;
