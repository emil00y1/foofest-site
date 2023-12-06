import RadioSwitch from "./RadioSwitch";

function TicketOptions({ ticket }) {
  return (
    <div>
      <p>Ticket</p>
      <RadioSwitch ticket={ticket} />
    </div>
  );
}

export default TicketOptions;
