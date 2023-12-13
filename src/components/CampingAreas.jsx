"use client";
import { React, useEffect, useState } from "react";
import RadioTile from "@/components/RadioTile";
import Headline from "./Headline";

async function fetchFunc() {
  const res = await fetch("http://localhost:8080/available-spots");
  const data = await res.json();
  return data;
}

function CampingAreas({ chosenArea, setChosenArea, errorMsg, setErrorMsg }) {
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
      <p>{errorMsg}</p>
      <div className="flex flex-col gap-3">
        {campingArea.map((spot) => (
          <RadioTile
            setErrorMsg={setErrorMsg}
            key={spot.area}
            area={spot.area}
            spots={spot.spots}
            availableSpots={spot.available}
            img={spot.img}
            setChosenArea={setChosenArea}
            chosenArea={chosenArea}
          />
        ))}
      </div>
    </div>
  );
}

export default CampingAreas;
