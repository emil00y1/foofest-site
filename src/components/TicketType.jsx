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
  let ticketCounter = 1;

  /* const handlePriceUpdate = () => {
    setPrice((prevPrice) => prevPrice + 799 * amount);
  }; */

  return (
    <PriceProvider>
      <div className="flex">
        Number of tickets <NumberInput setStandAmount={setStandAmount} setVipAmount={setVipAmount} amount={amount} setAmount={setAmount} />
      </div>
      {Array.from(Array(amount), () => (
        <TicketOptions setVipAmount={setVipAmount} setStandAmount={setStandAmount} ticket={ticketCounter++} key={ticketCounter++} />
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
