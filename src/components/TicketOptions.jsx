import { useState } from "react";
import RadioSwitch from "./RadioSwitch";

function TicketOptions({ ticket, setVipAmount, setStandAmount, setPrice }) {
  const [checked, setChecked] = useState("Standard");

  let price = () => {
    if (checked === "Standard") {
      return 799;
    } else if (checked === "VIP") {
      return 1299;
    }
  };

  return (
    <div className="flex gap-10">
      <p>
        Ticket {ticket} - {price()}
      </p>
      <RadioSwitch
        setVipAmount={setVipAmount}
        setStandAmount={setStandAmount}
        setChecked={setChecked}
        ticket={ticket}
        checked={checked === "Standard" ? "Standard" : "VIP"}
      />
    </div>
  );
}

export default TicketOptions;
