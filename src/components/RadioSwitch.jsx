import { useContext } from "react";
import { PriceUpdaterContext } from "@/contexts/priceContext";

function RadioSwitch({ ticketID, checked, setVipAmount, setStandAmount, onTypeChange }) {
  const updateCheckedState = useContext(PriceUpdaterContext);
  const handleRadioChange = (type) => {
    onTypeChange(type);
  };

  return (
    <>
      <fieldset className="inline">
        <div className="flex border-2 rounded-md border-yellowaccent">
          {/* Standard Radio Input */}
          <div className="flex items-center">
            <input defaultChecked type="radio" name={ticketID} id={ticketID + "standard"} className="peer h-0 w-0 opacity-0 focus:outline-none" defaultValue="standard" />
            <label
              htmlFor={ticketID + "standard"}
              className="cursor-pointer px-4 peer-checked:bg-yellowaccent peer-checked:background peer-focus-visible:ring peer-focus-visible:ring-orange-700 peer-focus-visible:ring-offset-2 p-1.5"
              onClick={() => {
                if (checked !== "Standard") {
                  updateCheckedState(ticketID, "Standard");
                  setStandAmount((old) => old + 1);
                  setVipAmount((old) => (old > 0 ? old - 1 : old));
                }
              }}
            >
              Standard
            </label>
          </div>

          {/* VIP Radio Input */}
          <div className="flex items-center">
            <input /* defaultChecked={checked === "VIP"} */ type="radio" name={ticketID} id={ticketID + "vip"} className="peer h-0 w-0 opacity-0 focus:outline-none" defaultValue="vip" />
            <label
              htmlFor={ticketID + "vip"}
              className="cursor-pointer px-4 peer-checked:bg-yellowaccent peer-checked:text-white peer-focus-visible:ring peer-focus-visible:ring-orange-700 peer-focus-visible:ring-offset-2 p-1.5"
              onClick={() => {
                if (checked !== "VIP") {
                  updateCheckedState(ticketID, "VIP");
                  setStandAmount((old) => (old > 0 ? old - 1 : old));
                  setVipAmount((old) => old + 1);
                }
              }}
            >
              VIP
            </label>
          </div>
        </div>
      </fieldset>
    </>
  );
}

export default RadioSwitch;
