"use client";
import { React, useEffect, useState } from "react";
import RadioTile from "@/components/RadioTile";
import Headline from "./Headline";
import NextButton from "./NextButton";

async function fetchFunc() {
  const res = await fetch("http://localhost:8080/available-spots");
  const data = await res.json();
  return data;
}

function CampingAreas() {
  const [campingArea, setCampingArea] = useState([]);

  useEffect(() => {
    const x = async () => {
      const data = await fetchFunc();
      console.log(data);
      setCampingArea(data);
    };
    x();
    x;
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <Headline>Choose camping area</Headline>
      <div className="flex flex-col gap-3">
        {campingArea.map((spot) => (
          <RadioTile
            key={spot.area}
            area={spot.area}
            spots={spot.spots}
            availableSpots={spot.available}
            img={spot.img}
          />
        ))}
      </div>

      <NextButton></NextButton>
    </div>
  );
}

export default CampingAreas;
