"use client";
import { React, useEffect, useState } from "react";
import RadioTile from "@/components/RadioTile";

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
    <div>
      {campingArea.map((spot) => (
        <RadioTile key={spot.area} area={spot.area} />
      ))}
    </div>
  );
}

export default CampingAreas;
