"use client";

import NumberInput from "@/components/NumberInput";
import TicketOptions from "@/components/TicketOptions";
import { useState } from "react";
import Divider from "./Divider";
import { PriceProvider } from "@/contexts/priceContext";

function TicketType() {
  const [amount, setAmount] = useState(0);
  const [vipAmount, setVipAmount] = useState(0);
  const [standAmount, setStandAmount] = useState(0);

  return (
    <PriceProvider>
      <div className="flex">
        {/* Pass a unique ticketID for NumberInput */}
        <NumberInput setStandAmount={setStandAmount} setVipAmount={setVipAmount} amount={amount} setAmount={setAmount} ticketID="numberInput" />
      </div>
      {Array.from({ length: amount }, (_, index) => (
        <TicketOptions key={index} ticketID={`ticketOption-${index}`} setVipAmount={setVipAmount} setStandAmount={setStandAmount} />
      ))}
      <div className="mt-4">
        <p className="flex justify-between">
          Booking fee <span>99.00</span>
        </p>
        <Divider />
        <p className="flex justify-end">{799 * standAmount + 1299 * vipAmount + 99}</p>
      </div>
    </PriceProvider>
  );
}

export default TicketType;
