import { useState } from "react";
import RadioSwitch from "./RadioSwitch";

function TicketOptions({ ticket }) {
  const [checked, setChecked] = useState("Standard");

  let price = () => {
    if (checked === "Standard") {
      return "799.00";
    } else if (checked === "VIP") {
      return "1,299.00";
    }
  };

  return (
    <div className="flex gap-10">
      <p>
        Ticket {ticket} - {price()}
      </p>
      <RadioSwitch
        setChecked={setChecked}
        ticket={ticket}
        checked={checked === "Standard" ? "Standard" : "VIP"}
      />
    </div>
  );
}

export default TicketOptions;
