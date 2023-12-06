import styles from "./modules/RadioSwitch.module.css";

function RadioSwitch(props) {
  return (
    <>
      <fieldset class="mt-5 px-5 inline">
        <div class="flex border-2 rounded-md border-yellowaccent">
          <div class="flex items-center">
            <input type="radio" name={props.ticket} id={props.ticket + "standard"} class="peer h-0 w-0 opacity-0 focus:outline-none" value="standard" />
            <label
              for={props.ticket + "standard"}
              class="cursor-pointer px-4 peer-checked:bg-yellowaccent peer-checked:background peer-focus-visible:ring peer-focus-visible:ring-orange-700 peer-focus-visible:ring-offset-2 p-1.5"
            >
              Standard
            </label>
          </div>
          <div class="flex items-center">
            <input type="radio" name={props.ticket} id={props.ticket + "vip"} class="peer h-0 w-0 opacity-0 focus:outline-none" value="vip" />
            <label
              for={props.ticket + "vip"}
              class="cursor-pointer px-4 peer-checked:bg-yellowaccent peer-checked:text-white peer-focus-visible:ring peer-focus-visible:ring-orange-700 peer-focus-visible:ring-offset-2 p-1.5"
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
