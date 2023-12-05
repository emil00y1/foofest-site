import CampingAreas from "../layouts/CampingAreas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Headline from "@/components/Headline";
import RadioSwitch from "@/components/RadioSwitch";

function buyTickets() {
  return (
    <>
      <main>
        <Headline>Choose your tickets</Headline>
        <div>Number of tickets</div>
        <RadioSwitch />
      </main>
    </>
  );
}

export default buyTickets;
