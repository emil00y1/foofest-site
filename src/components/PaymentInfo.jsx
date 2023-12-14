"use client";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import Divider from "./Divider";
import FormCard from "./FormCard";
import { useState } from "react";

function PaymentInfo({ amount, vipPrice, standardPrice, tentTwoAmount, tentThreeAmount, greenChecked, setPaymentData, paymentData, errorMsg }) {
  /*   const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [exp, setExp] = useState("");
  const [cvcData, setCvcData] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState(""); */

  let vipAmount = amount.reduce((count, ticket) => {
    if (ticket.vip) {
      return count + 1;
    }
    return count;
  }, 0);
  let standardAmount = amount.reduce((count, ticket) => {
    if (ticket.vip === false) {
      return count + 1;
    }
    return count;
  }, 0);

  const handleChange = (e) => {
    /*     e.target.id === "addressline1"
      ? setAddress(e.target.value)
      : e.target.id === "zipcode"
      ? setZip(e.target.value)
      : e.target.id === "city"
      ? setCity(e.target.value) 
      : null; */
    const { id, value } = e.target;

    setPaymentData((paymentData) => paymentData.map((info, index) => (index === 0 ? { ...info, [id]: value } : info)));
  };

  const greenPrice = greenChecked === true ? 249 : 0;

  const totalPrice = vipAmount * vipPrice + standardAmount * standardPrice + tentTwoAmount * 299 + tentThreeAmount * 399 + greenPrice + 99;

  const tax = Math.round(totalPrice * 0.2 * 100) / 100;

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-xl">Payment card</h2>
          </div>
          <FormCard
            paymentData={paymentData}
            setPaymentData={setPaymentData}
            errorMsg={errorMsg}
            /*             setName={setName}
            setCardNumber={setCardNumber}
            setExp={setExp}
            setCvcData={setCvcData} */
          />

          <div>
            <h2 className="text-xl">Invoice address</h2>
          </div>
          <fieldset className="flex flex-col gap-2">
            <div>
              <Label htmlFor="addressline1">Address line 1</Label>
              <Input type="text" id="addressline1" value={paymentData[0].addressline1} onChange={handleChange} />
              {paymentData[0].addressline1 === "" ? <p>{errorMsg}</p> : null}
            </div>
            <div>
              <Label htmlFor="addressline2">Address line 2</Label>
              <Input type="text" id="addressline2" />
            </div>
            <div className="flex gap-5">
              <div>
                <Label htmlFor="zipcode">ZIP CODE</Label>
                <Input type="number" id="zipcode" onChange={handleChange} />
                {paymentData[0].zipcode === "" ? <p>{errorMsg}</p> : null}
              </div>
              <div>
                <Label htmlFor="city">CITY</Label>
                <Input type="text" id="city" onChange={handleChange} />
                {paymentData[0].city === "" ? <p>{errorMsg}</p> : null}
              </div>
            </div>
          </fieldset>
        </div>
        <Divider />
        {vipAmount > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            <p>VIP</p> <p>{vipAmount}</p>
            <p className="text-right">{vipAmount * vipPrice}.00</p>
          </div>
        ) : null}
        {standardAmount > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            <p>standard ticket</p> <p>{standardAmount}</p>
            <p className="text-right">{standardAmount * standardPrice}.00</p>
          </div>
        ) : null}
        {tentTwoAmount > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            <p>2 person tent</p> <p>{tentTwoAmount}</p>
            <p className="text-right">{tentTwoAmount * 299}.00</p>
          </div>
        ) : null}
        {tentThreeAmount > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            <p>3 person tent</p> <p>{tentThreeAmount}</p>
            <p className="text-right">{tentThreeAmount * 399}.00</p>
          </div>
        ) : null}
        {greenChecked === true ? (
          <div className="flex justify-between">
            <p>green camping</p>
            <p>{greenPrice}.00</p>
          </div>
        ) : null}

        <div className="flex justify-between">
          <p>booking fee</p>
          <p>99.00</p>
        </div>
        <Divider />
        <div className="flex justify-between text-sm">
          <p>25% tax included</p>
          <p>{tax}</p>
        </div>
        <Divider />
        <div className="flex justify-between text-xl">
          <p>Total</p>
          <div className="text-right">
            <p>DKK</p>
            <p>{totalPrice}.00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentInfo;
