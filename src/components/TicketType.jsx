"use client";
import NumberInput from "@/components/NumberInput";
import TicketOptions from "@/components/TicketOptions";
import { useState } from "react";
import Divider from "./Divider";
import Headline from "./Headline";

function TicketType({
  standAmount,
  setStandAmount,
  vipAmount,
  setVipAmount,
  amount,
  setAmount,
}) {
  let ticketCounter = 1;

  /* const handlePriceUpdate = () => {
    setPrice((prevPrice) => prevPrice + 799 * amount);
  }; */

  return (
    <>
      <Headline>Choose your tickets</Headline>
      <div className="flex">
        Number of tickets{" "}
        <NumberInput
          setStandAmount={setStandAmount}
          setVipAmount={setVipAmount}
          amount={amount}
          setAmount={setAmount}
        />
      </div>
      {Array.from(Array(amount), () => (
        <TicketOptions
          setVipAmount={setVipAmount}
          setStandAmount={setStandAmount}
          ticket={ticketCounter++}
          key={ticketCounter++}
        />
      ))}
      <div className="mt-4">
        <p className="flex justify-between">
          Booking fee <span>99.00</span>
        </p>
        <Divider />
        <p className="flex justify-end">
          {799 * standAmount + 1299 * vipAmount + 99}
        </p>
      </div>
    </>
  );
}

export default TicketType;
