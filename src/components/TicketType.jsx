"use client";
import NumberInput from "@/components/NumberInput";
import TicketOptions from "@/components/TicketOptions";
import { useState } from "react";

function TicketType() {
  const [Amount, setAmount] = useState(0);
  let ticketCounter = 1;

  return (
    <>
      <div className="flex">
        Number of tickets <NumberInput Amount={Amount} setAmount={setAmount} />
      </div>
      {Array.from(Array(Amount), () => (
        <TicketOptions ticket={ticketCounter++} key={Math.random()} />
      ))}
    </>
  );
}

export default TicketType;
