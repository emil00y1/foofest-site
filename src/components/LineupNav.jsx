"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

function LineupNav({ stages, setSelectedStage, setSelectedDay, selectedDay, selectedStage }) {
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  return (
    <nav className="flex flex-col gap-5">
      <div className="flex overflow-scroll">
        {days.map((day) => (
          <Button
            className={`uppercase rounded-none text-xl px-5 py-4 border-yellowaccent hover:bg-amber-200 hover:text-background ${
              selectedDay === day ? "bg-yellowaccent text-background" : "bg-background text-yellowaccent"
            }`}
            variant="outline"
            key={day}
            onClick={() => {
              console.log("click day", day);
              setSelectedDay(`${day}`);
            }}
          >
            {day}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {stages.map((stage) => (
          <Button
            className={`rounded-full py-1.5 px-3.5 h-8 border-yellowaccent hover:bg-amber-200 hover:text-background ${
              selectedStage === stage ? "bg-yellowaccent text-background" : "bg-background text-yellowaccent"
            }`}
            variant="outline"
            key={stage}
            onClick={() => {
              console.log("click day", stage);
              setSelectedStage(`${stage}`);
            }}
          >
            {stage}
          </Button>
        ))}
      </div>
    </nav>
  );
}

export default LineupNav;
