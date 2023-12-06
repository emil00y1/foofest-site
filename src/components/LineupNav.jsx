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
      <div>
        {days.map((day) => (
          <Button className="uppercase rounded-none" variant="outline">
            {day}
          </Button>
        ))}
      </div>
      <div>
        {stages.map((stage) => (
          <Button className="uppercase rounded-none" variant="outline">
            {stage}
          </Button>
        ))}
      </div>
    </nav>
  );
}

export default LineupNav;
