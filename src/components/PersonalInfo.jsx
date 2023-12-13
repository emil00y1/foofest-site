import { useState, useEffect } from "react";
import Headline from "./Headline";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function PersonalInfo({ amount, setAmount }) {
  const handleChange = (index) => (e) => {
    const name = e.target.name.split("-")[0];
    const updatedTickets = [...amount];
    updatedTickets[index] = {
      ...updatedTickets[index],
      [name]: e.target.value,
    };
    setAmount(updatedTickets);
  };

  return (
    <>
      <div className="flex flex-col gap-8 mb-4">
        <div className="flex flex-col gap-10">
          {amount.map((ticket, index) => (
            <div className="flex flex-col gap-5" key={index}>
              <div>
                <p className="text-xl">Ticket {index + 1}</p>
                <p className="text-sm opacity-70">
                  {ticket.vip ? "VIP Ticket" : "Standard Ticket"}
                </p>
              </div>
              <fieldset className="flex flex-col gap-2">
                <div className="flex gap-5">
                  <div>
                    <Label htmlFor={"firstname" + index}>Firstname</Label>
                    <Input
                      type="text"
                      id={"firstname" + index}
                      name={"firstname-" + index}
                      value={ticket.firstname}
                      onChange={handleChange(index)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={"surname" + index}>Surname</Label>
                    <Input
                      type="text"
                      id={"surname" + index}
                      name={"surname-" + index}
                      value={ticket.surname}
                      onChange={handleChange(index)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor={"email" + index}>E-mail</Label>
                  <Input
                    type="email"
                    id={"email" + index}
                    name={"email-" + index}
                    value={ticket.email}
                    onChange={handleChange(index)}
                  />
                </div>
                <div>
                  <Label htmlFor={"phone" + index}>Phone</Label>
                  <Input
                    type="tel"
                    id={"phone" + index}
                    name={"phone-" + index}
                    value={ticket.phone}
                    onChange={handleChange(index)}
                  />
                </div>
              </fieldset>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Checkbox required />
        <Label>Accept terms and conditions</Label>
      </div>
    </>
  );
}

export default PersonalInfo;
