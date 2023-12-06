"use client";
import NumberInput from "@/components/NumberInput";
import TicketOptions from "@/components/TicketOptions";
import { useState } from "react";
import Divider from "./Divider";

function TicketType() {
  const [Amount, setAmount] = useState(0);
  let ticketCounter = 1;

  return (
    <>
      <div className="flex">
        Number of tickets <NumberInput Amount={Amount} setAmount={setAmount} />
      </div>
      {Array.from(Array(Amount), () => (
        <TicketOptions ticket={ticketCounter++} key={ticketCounter++} />
      ))}
      <div className="mt-4">
        <p className="flex justify-between">
          Booking fee <span>99.00</span>
        </p>
        <Divider />
        <p className="flex justify-end">1200</p>
      </div>
    </>
  );
}

export default TicketType;
