import { useContext } from "react";
import { PriceValueContext } from "@/contexts/priceContext";

function NumberInput({ setAmount, amount, setStandAmount, setVipAmount, ticketID }) {
  const checkedStates = useContext(PriceValueContext);

  // Retrieve the checked state for this specific NumberInput instance
  const checked = checkedStates[ticketID];

  return (
    <>
      <div className="flex border-2 border-foreground inline p-1.5 rounded-md">
        <button
          disabled={amount === 0}
          onClick={() => {
            setAmount((old) => old - 1);
            checked === "VIP" ? setVipAmount((old) => old - 1) : setStandAmount((old) => old - 1);
          }}
        >
          <svg className="fill-foreground" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M200-440v-80h560v80H200Z" />
          </svg>
        </button>
        <label htmlFor="tickets"></label>
        <input className="bg-background border-1 w-14 text-center" id="tickets" type="number" readOnly value={amount} />

        <button
          onClick={() => {
            /*             setChecked("Standard");
             */ setAmount((old) => old + 1);
            setStandAmount((old) => old + 1);
          }}
        >
          <svg className="fill-foreground" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default NumberInput;
