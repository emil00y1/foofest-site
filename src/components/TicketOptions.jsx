import RadioSwitch from "./RadioSwitch";

function TicketOptions(props) {
  return (
    <div>
      <p>Ticket</p>
      <RadioSwitch ticket={props.ticket} />
    </div>
  );
}

export default TicketOptions;
