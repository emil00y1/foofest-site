import { useContext, useState } from "react";
import RadioSwitch from "./RadioSwitch";
import { PriceValueContext } from "@/contexts/priceContext";

function TicketOptions({ ticket, setVipAmount, setStandAmount }) {
  const checked = useContext(PriceValueContext);
  const [switchCheck, setSwitchCheck] = useState("Standard");

  let price = () => {
    if (switchCheck === "Standard") {
      return "799.00";
    } else if (switchCheck === "VIP") {
      return "1,299.00";
    }
  };

  return (
    <div className="flex gap-10">
      <p>
        Ticket {ticket} - {price()}
      </p>
      <RadioSwitch
        setSwitchCheck={setSwitchCheck}
        switchCheck={switchCheck}
        setVipAmount={setVipAmount}
        setStandAmount={setStandAmount}
        ticket={ticket}
        checked={checked === "Standard" ? "Standard" : "VIP"}
      />
    </div>
  );
}

export default TicketOptions;
