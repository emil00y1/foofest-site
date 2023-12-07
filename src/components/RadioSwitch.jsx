function RadioSwitch({
  ticket,
  setChecked,
  checked,
  setPrice,
  setVipAmount,
  setStandAmount,
}) {
  return (
    <>
      <fieldset className="inline">
        <div className="flex border-2 rounded-md border-yellowaccent">
          <div className="flex items-center">
            <input
              defaultChecked={checked === "Standard"}
              type="radio"
              name={ticket}
              id={ticket + "standard"}
              className="peer h-0 w-0 opacity-0 focus:outline-none"
              defaultValue="standard"
            />
            <label
              htmlFor={ticket + "standard"}
              className="cursor-pointer px-4 peer-checked:bg-yellowaccent peer-checked:background peer-focus-visible:ring peer-focus-visible:ring-orange-700 peer-focus-visible:ring-offset-2 p-1.5"
              onClick={() => {
                setChecked("Standard");
                if (checked === "VIP") {
                  setStandAmount((old) => old + 1);
                  setVipAmount((old) => old - 1);
                }
              }}
            >
              Standard
            </label>
          </div>
          <div className="flex items-center">
            <input
              defaultChecked={checked === "VIP"}
              type="radio"
              name={ticket}
              id={ticket + "vip"}
              className="peer h-0 w-0 opacity-0 focus:outline-none"
              defaultValue="vip"
            />
            <label
              htmlFor={ticket + "vip"}
              className="cursor-pointer px-4 peer-checked:bg-yellowaccent peer-checked:text-white peer-focus-visible:ring peer-focus-visible:ring-orange-700 peer-focus-visible:ring-offset-2 p-1.5"
              onClick={() => {
                setChecked("VIP");
                if (checked === "Standard") {
                  setStandAmount((old) => old - 1);
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
