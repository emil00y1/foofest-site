import CampingAreas from "../layouts/CampingAreas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function buyTickets() {
  return (
    <>
      <main>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit" className="hover:bg-yellow-300">
            Subscribe
          </Button>
        </div>
        <CampingAreas></CampingAreas>
      </main>
    </>
  );
}

export default buyTickets;
