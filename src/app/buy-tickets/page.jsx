import CampingAreas from "../layouts/CampingAreas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Headline from "@/components/Headline";
import RadioSwitch from "@/components/RadioSwitch";
import NumberInput from "@/components/NumberInput";
import TicketOptions from "@/components/TicketOptions";

function buyTickets() {
  return (
    <>
      <main>
        <Headline>Choose your tickets</Headline>
        <div>
          Number of tickets <NumberInput />
        </div>
        <TicketOptions ticket="1" />
        <TicketOptions ticket="2" />
      </main>
    </>
  );
}

export default buyTickets;
