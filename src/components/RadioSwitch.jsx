function RadioSwitch(props) {
  return (
    <>
      <fieldset className="mt-5 px-5 inline">
        <div className="flex border-2 rounded-md border-yellowaccent">
          <div className="flex items-center">
            <input
              type="radio"
              name={props.ticket}
              id={props.ticket + "standard"}
              className="peer h-0 w-0 opacity-0 focus:outline-none"
              value="standard"
            />
            <label
              htmlFor={props.ticket + "standard"}
              className="cursor-pointer px-4 peer-checked:bg-yellowaccent peer-checked:background peer-focus-visible:ring peer-focus-visible:ring-orange-700 peer-focus-visible:ring-offset-2 p-1.5"
            >
              Standard
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name={props.ticket}
              id={props.ticket + "vip"}
              className="peer h-0 w-0 opacity-0 focus:outline-none"
              value="vip"
            />
            <label
              htmlFor={props.ticket + "vip"}
              className="cursor-pointer px-4 peer-checked:bg-yellowaccent peer-checked:text-white peer-focus-visible:ring peer-focus-visible:ring-orange-700 peer-focus-visible:ring-offset-2 p-1.5"
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
