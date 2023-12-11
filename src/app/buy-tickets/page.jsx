"use client";

import CampingAreas from "@/components/CampingAreas";
import CampingPreference from "@/components/CampingPreference";
import NextButton from "@/components/NextButton";
import PaymentInfo from "@/components/PaymentInfo";
import PersonalInfo from "@/components/PersonalInfo";
import TicketType from "@/components/TicketType";
import { useState } from "react";

function BuyTickets() {
  const [pageView, setPageView] = useState(1);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <main className="m-4">
        <form onSubmit={handleSubmit}>
          <TicketType />

          <CampingAreas />
          <CampingPreference />
          <PersonalInfo />

          <PaymentInfo />
          <NextButton
            onClick={() => {
              console.log("klikket på next");
              setPageView((o) => o + 1);
            }}
          />
        </form>
      </main>
    </>
  );
}

export default BuyTickets;
