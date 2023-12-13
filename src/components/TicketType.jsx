"use client";
import NumberInput from "@/components/NumberInput";
import TicketOptions from "@/components/TicketOptions";
import { useState } from "react";
import Divider from "./Divider";
import Headline from "./Headline";

function TicketType({ standAmount, setStandAmount, vipAmount, setVipAmount, amount, setAmount, vipPrice, standardPrice }) {
  let ticketCounter = 1;

  function totalPrice(tickets) {
    let totalPrice = 0;

    amount.forEach((ticket) => {
      if (ticket.vip) {
        totalPrice += vipPrice;
      } else {
        totalPrice += standardPrice;
      }
    });

    return totalPrice;
  }

  return (
    <>
      <div className="flex">
        Number of tickets <NumberInput setStandAmount={setStandAmount} setVipAmount={setVipAmount} amount={amount} setAmount={setAmount} />
      </div>
      {amount.map((ticketOption, index) => (
        <TicketOptions
          amount={amount}
          setAmount={setAmount}
          ticketIndex={index} //
          /* setVipAmount={setVipAmount}
          setStandAmount={setStandAmount} */
          ticket={index + 1}
          key={index} // Unique key for each component
          vip={ticketOption.vip} // Passing vip value to TicketOptions
        />
      ))}
      <div className="mt-4">
        <p className="flex justify-between">
          Booking fee <span>99.00</span>
        </p>
        <Divider />
        <p className="flex justify-end">{99 + totalPrice()}</p>
      </div>
    </>
  );
}

export default TicketType;
