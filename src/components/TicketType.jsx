"use client";
import NumberInput from "@/components/NumberInput";
import TicketOptions from "@/components/TicketOptions";
import { useState } from "react";
import Divider from "./Divider";
import Headline from "./Headline";

function TicketType({ standAmount, setStandAmount, vipAmount, setVipAmount, amount, setAmount, vipPrice, standardPrice, setErrorMsg, errorMsg }) {
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
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <p>Number of tickets</p> <NumberInput setErrorMsg={setErrorMsg} setStandAmount={setStandAmount} setVipAmount={setVipAmount} amount={amount} setAmount={setAmount} />
        </div>
        {errorMsg !== "" ? (
          <p className="text-red-600 flex items-center gap-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M5.99444 6.5556L6 3.77778M5.99444 8.22223H6M3.66688 1.90935C4.0688 1.87727 4.45036 1.71923 4.75723 1.45771C5.47336 0.84743 6.52664 0.84743 7.24277 1.45771C7.54964 1.71923 7.9312 1.87727 8.33312 1.90935C9.27103 1.98419 10.0158 2.72897 10.0907 3.66688C10.1227 4.0688 10.2808 4.45036 10.5423 4.75723C11.1526 5.47336 11.1526 6.52664 10.5423 7.24277C10.2808 7.54964 10.1227 7.9312 10.0907 8.33312C10.0158 9.27103 9.27103 10.0158 8.33312 10.0907C7.9312 10.1227 7.54964 10.2808 7.24277 10.5423C6.52664 11.1526 5.47336 11.1526 4.75723 10.5423C4.45036 10.2808 4.0688 10.1227 3.66688 10.0907C2.72897 10.0158 1.98419 9.27103 1.90935 8.33312C1.87727 7.9312 1.71923 7.54964 1.45771 7.24277C0.84743 6.52664 0.84743 5.47336 1.45771 4.75723C1.71923 4.45036 1.87727 4.0688 1.90935 3.66688C1.98419 2.72897 2.72897 1.98419 3.66688 1.90935Z"
                stroke="#DC2626"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {errorMsg}
          </p>
        ) : null}
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
      </div>
      <div className="mt-4">
        <p className="flex justify-between">
          Booking fee <span>99.00</span>
        </p>
        <Divider />
        <p className="flex justify-end">{99 + totalPrice()}.00</p>
      </div>
    </>
  );
}

export default TicketType;
