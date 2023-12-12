"use client";
import CampingAreas from "@/components/CampingAreas";
import CampingPreference from "@/components/CampingPreference";
import { Button } from "@/components/ui/button";
import PaymentInfo from "@/components/PaymentInfo";
import PersonalInfo from "@/components/PersonalInfo";
import TicketType from "@/components/TicketType";
import { useState } from "react";
import Headline from "@/components/Headline";
import Confirmation from "@/components/Confirmation";
import { Progress } from "@/components/ui/progress";

function BuyTickets() {
  const [pageView, setPageView] = useState(1);
  const [amount, setAmount] = useState(0);
  const [vipAmount, setVipAmount] = useState(0);
  const [standAmount, setStandAmount] = useState(0);
  const [chosenArea, setChosenArea] = useState("");
  const [tentTwoAmount, setTentTwoAmount] = useState(0);
  const [tentThreeAmount, setTentThreeAmount] = useState(0);
  const [greenChecked, setGreenChecked] = useState(false);
  const [people, setPeople] = useState([]);

  const ticketData = {
    vipTickets: vipAmount,
    standardTickets: standAmount,
    campingArea: chosenArea,
    twoPersTent: tentTwoAmount,
    threePersTent: tentThreeAmount,
    greenCamping: greenChecked,
    people: JSON.stringify(people),
  };

  let headersList = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5ZXphdWFlY3RhbW9nZ2xrbXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ0OTcyODUsImV4cCI6MjAwMDA3MzI4NX0.5CbbGAvqETjhd1_tbVm-oa-4F_JHliJV0Xuy_dG2rms",
    Prefer: "return=representation",
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  /* let data = await response.text();
console.log(data); */
  let bodyContent = JSON.stringify(ticketData);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (pageView === 5) {
      fetch("https://syezauaectamogglkmvc.supabase.co/rest/v1/foofest", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });
    }
  };
  return (
    <>
      <main className="m-4">
        {pageView === 1 ? (
          <Headline>Choose your tickets</Headline>
        ) : pageView === 2 ? (
          <Headline>Choose camping area</Headline>
        ) : pageView === 3 ? (
          <Headline>camping preferences</Headline>
        ) : pageView === 4 ? (
          <Headline>Personal info</Headline>
        ) : pageView === 5 ? (
          <Headline>Payment info</Headline>
        ) : null}

        <Progress value={pageView * 16.66} className="mb-6" />

        <form onSubmit={handleSubmit}>
          {pageView === 1 ? (
            <TicketType amount={amount} setAmount={setAmount} standAmount={standAmount} setStandAmount={setStandAmount} vipAmount={vipAmount} setVipAmount={setVipAmount} />
          ) : pageView === 2 ? (
            <CampingAreas chosenArea={chosenArea} setChosenArea={setChosenArea} />
          ) : pageView === 3 ? (
            <CampingPreference
              tentTwoAmount={tentTwoAmount}
              setTentTwoAmount={setTentTwoAmount}
              tentThreeAmount={tentThreeAmount}
              setTentThreeAmount={setTentThreeAmount}
              greenChecked={greenChecked}
              setGreenChecked={setGreenChecked}
            />
          ) : pageView === 4 ? (
            <PersonalInfo setPeople={setPeople} amount={amount} />
          ) : pageView === 5 ? (
            <PaymentInfo />
          ) : (
            <Confirmation />
          )}
          <div className="flex items-center my-10 justify-center gap-5">
            {pageView < 6 && pageView > 1 ? (
              <Button
                variant="outline"
                className="p-5 border-yellowaccent"
                onClick={() => {
                  setPageView((o) => o - 1);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none">
                  <path
                    d="M8.71967 1.21967C9.01256 0.926777 9.48744 0.926777 9.78033 1.21967C10.0407 1.48002 10.0696 1.88416 9.86711 2.17646L9.78033 2.28033L3.559 8.5L24.25 8.5C24.6642 8.5 25 8.83579 25 9.25C25 9.66421 24.6642 10 24.25 10L3.5605 10L9.78033 16.2197C10.0732 16.5126 10.0732 16.9874 9.78033 17.2803C9.48744 17.5732 9.01256 17.5732 8.71967 17.2803L1.21967 9.78033L1.16344 9.71749V9.71749L1.10012 9.62465V9.62465L1.03727 9.48402L1.00817 9.3611V9.3611L1.00273 9.31422V9.31422L1.00017 9.23419C1.00083 9.2024 1.00351 9.17064 1.00819 9.13912L1 9.25L1.00423 9.16986V9.16986L1.02441 9.05974V9.05974L1.03727 9.01587L1.08521 8.90236V8.90236L1.15225 8.79686V8.79686L1.21967 8.71967V8.71967L8.71967 1.21967Z"
                    fill="#FEC90D"
                    stroke="#FEC90D"
                  />
                </svg>
              </Button>
            ) : null}
            {pageView < 5 ? (
              <Button
                className="p-5 text-background gap-4 text-xl uppercase w-48  hover:bg-yellowaccent hover:text-background group "
                onClick={() => {
                  console.log("klikket på next");
                  setPageView((o) => o + 1);
                }}
              >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                  <path
                    d="M17.2803 20.7803C16.9874 21.0732 16.5126 21.0732 16.2197 20.7803C15.9593 20.52 15.9304 20.1158 16.1329 19.8235L16.2197 19.7197L22.441 13.5L1.75 13.5C1.33579 13.5 0.999999 13.1642 0.999999 12.75C0.999999 12.3358 1.33579 12 1.75 12L22.4395 12L16.2197 5.78033C15.9268 5.48744 15.9268 5.01256 16.2197 4.71967C16.5126 4.42678 16.9874 4.42678 17.2803 4.71967L24.7803 12.2197L24.8366 12.2825L24.8999 12.3754L24.9627 12.516L24.9918 12.6389L24.9973 12.6858L24.9998 12.7658C24.9992 12.7976 24.9965 12.8294 24.9918 12.8609L25 12.75L24.9958 12.8301L24.9756 12.9403L24.9627 12.9841L24.9148 13.0976L24.8477 13.2031L24.7803 13.2803L17.2803 20.7803Z"
                    fill="#222"
                    stroke="#222"
                    className="group-hover:stroke-background"
                  />
                </svg>
              </Button>
            ) : pageView === 5 ? (
              <Button
                className="p-5 text-background gap-4 text-xl uppercase hover:bg-yellowaccent hover:text-background group"
                onClick={() => {
                  console.log("klikket på next");
                  setPageView((o) => o + 1);
                }}
              >
                CONFIRM PAYMENT
              </Button>
            ) : null}
          </div>
        </form>
      </main>
    </>
  );
}

export default BuyTickets;
