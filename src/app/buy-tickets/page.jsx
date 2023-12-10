import CampingAreas from "@/components/CampingAreas";
import CampingPreference from "@/components/CampingPreference";
import Headline from "@/components/Headline";
import TicketType from "@/components/TicketType";

function buyTickets() {
  return (
    <>
      <main className="m-4">
        {/*         <TicketType />
         */}
        <CampingAreas />
        {/* <CampingPreference /> */}
      </main>
    </>
  );
}

export default buyTickets;
