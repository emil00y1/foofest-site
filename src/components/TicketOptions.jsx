import { useContext, useState } from "react";
import RadioSwitch from "./RadioSwitch";
import { PriceValueContext, PriceProvider } from "@/contexts/priceContext";

function TicketOptions({ ticket, setVipAmount, setStandAmount }) {
  const checked = useContext(PriceValueContext);

  let price = () => {
    if (checked === "Standard") {
      return "799.00";
    } else if (checked === "VIP") {
      return "1,299.00";
    }
  };

  return (
    <PriceProvider>
      <div className="flex gap-10">
        <p>
          Ticket {ticket} - {price()}
        </p>
        <RadioSwitch setChecked={setChecked} checked={checked} setVipAmount={setVipAmount} setStandAmount={setStandAmount} ticket={ticket} />
      </div>
    </PriceProvider>
  );
}

export default TicketOptions;
