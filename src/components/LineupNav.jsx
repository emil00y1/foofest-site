"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function LineupNav() {
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const [day, setDay] = useState(true);

  return (
    <nav>
      {days.map((day) => (
        <Button className="uppercase rounded-none" variant="outline">
          {day}
        </Button>
      ))}
    </nav>
  );
}

export default LineupNav;
