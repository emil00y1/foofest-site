"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

async function fetchFunc() {
  const res = await fetch("http://localhost:8080/schedule");
  const data = await res.json();
  return data;
}

function LineupNav() {
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  const [stages, setStages] = useState([]);
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
  console.log("stages", stages);
  return (
    <nav>
      <div className="flex overflow-scroll">
        {days.map((day) => (
          <Button className="uppercase rounded-none text-xl px-5 py-4" variant="outline" key={day}>
            {day}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {stages.map((stage) => (
          <Button className="rounded-full py-1.5 px-3.5 h-8" variant="outline" key={stage}>
            {stage}
          </Button>
        ))}
      </div>
    </nav>
  );
}

export default LineupNav;
