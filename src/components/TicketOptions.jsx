import { useContext } from "react";
import RadioSwitch from "./RadioSwitch";
import { PriceValueContext, PriceUpdaterContext } from "@/contexts/priceContext";

function TicketOptions({ ticketID, setVipAmount, setStandAmount }) {
  const checkedStates = useContext(PriceValueContext);
  const updateCheckedState = useContext(PriceUpdaterContext);

  // Assuming 'ticket' can be used as a unique identifier for each TicketOptions
  const checked = checkedStates[ticketID];

  let price = () => {
    if (checked === "Standard") {
      return "799.00";
    } else if (checked === "VIP") {
      return "1,299.00";
    }
  };

  const handleCheckedChange = (newValue) => {
    updateCheckedState(ticketID, newValue);
  };

  return (
    <div className="flex gap-10">
      <p>
        Ticket {ticketID} - {price()}
      </p>
      <RadioSwitch setChecked={handleCheckedChange} checked={checked} setVipAmount={setVipAmount} setStandAmount={setStandAmount} ticketID={ticketID} />
    </div>
  );
}

export default TicketOptions;
