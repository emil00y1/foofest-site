"use client";
/* import CampingAreas from "@/components/CampingAreas";
import CampingPreference from "@/components/CampingPreference";
import { Button } from "@/components/ui/button";
import PaymentInfo from "@/components/PaymentInfo";
import PersonalInfo from "@/components/PersonalInfo";
import TicketType from "@/components/TicketType"; */
import BuyTicketsCont from "@/components/BuyTicketsCont";
import { useState } from "react";
/* import Headline from "@/components/Headline";
import Confirmation from "@/components/Confirmation";
import { Progress } from "@/components/ui/progress";
import NextBtn from "@/components/NextBtn"; */
import Countdown from "react-countdown";

function BuyTickets() {
  const [pageView, setPageView] = useState(1);
  /*   const [vipAmount, setVipAmount] = useState(0);
  const [standAmount, setStandAmount] = useState(0);
  const [acceptedTerms, setAcceptedTerms] = useState(false); */
  const [chosenArea, setChosenArea] = useState("");
  const [tentTwoAmount, setTentTwoAmount] = useState(0);
  const [tentThreeAmount, setTentThreeAmount] = useState(0);
  const [greenChecked, setGreenChecked] = useState(false);
  /*   const [errorMsg, setErrorMsg] = useState(""); */
  const [reservationId, setReservationId] = useState();
  const [reservationTimer, setReservationTimer] = useState();
  /*   const [termsError, setTermsError] = useState(""); */
  /*   const [people, setPeople] = useState([]);
   */ const [amount, setAmount] = useState([]);

  const [paymentData, setPaymentData] = useState([
    {
      cardname: "",
      cardnumber: "",
      exdate: "",
      cvc: "",
      addressline1: "",
      zipcode: "",
      city: "",
    },
  ]);

  let reservation = {
    area: `${chosenArea}`,
    amount: amount.length,
  };

  /*   const vipPrice = 1299;
  const standardPrice = 799; */

  const ticketData = {
    campingArea: chosenArea,
    twoPersTent: tentTwoAmount,
    threePersTent: tentThreeAmount,
    greenCamping: greenChecked,
    tickets: JSON.stringify(amount),
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
    if (pageView === 6) {
      console.log(reservationId);
      fetch("https://syezauaectamogglkmvc.supabase.co/rest/v1/foofest", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });
      fetch("http://localhost:8080/fullfill-reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: reservationId,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); // This returns a promise
        })
        .then((data) => {
          console.log(data);
          console.log(reservationId);
          // Here, 'data' is the actual JSON response
        })
        .catch((err) => console.error(err));
    }
    if (pageView === 3) {
      fetch("http://localhost:8080/reserve-spot", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); // This returns a promise
        })
        .then((data) => {
          console.log(data.id);
          setReservationId(data.id);
          setReservationTimer(data.timeout);
          console.log("første id", reservationId);
          console.log("timer", data.timeout);
          // Here, 'data' is the actual JSON response
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <BuyTicketsCont
        pageView={pageView}
        setPageView={setPageView}
        chosenArea={chosenArea}
        setChosenArea={setChosenArea}
        tentTwoAmount={tentTwoAmount}
        setTentTwoAmount={setTentTwoAmount}
        tentThreeAmount={tentThreeAmount}
        setTentThreeAmount={setTentThreeAmount}
        greenChecked={greenChecked}
        setGreenChecked={setGreenChecked}
        amount={amount}
        setAmount={setAmount}
        paymentData={paymentData}
        setPaymentData={setPaymentData}
        handleSubmit={handleSubmit}
        reservation={reservation}
      >
        {reservationTimer > 0 ? <Countdown date={Date.now() + 600000} /> : null}
      </BuyTicketsCont>
    </>
  );
}

export default BuyTickets;
