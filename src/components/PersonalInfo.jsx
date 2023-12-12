import { useState } from "react";
import Headline from "./Headline";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function PersonalInfo({ amount, setPeople }) {
  const initialPersonData = Array.from({ length: amount }, () => ({
    firstname: "",
    surname: "",
    email: "",
    phone: "",
  }));
  const [localPersonData, setLocalPersonData] = useState(initialPersonData);

  const handleChange = (e) => {
    const [name, index] = e.target.name.split("-");
    const updatedTickets = [...localPersonData];
    updatedTickets[index] = {
      ...updatedTickets[index],
      [name]: e.target.value,
    };
    setLocalPersonData(updatedTickets);
    setPeople(localPersonData);
  };

  return (
    <>
      <div className="flex flex-col gap-8 mb-4">
        <div className="flex flex-col gap-10">
          {Array.from(Array(amount), (element, index) => (
            <div className="flex flex-col gap-5" key={index}>
              <div>
                <p className="text-xl">Ticket {index + 1}</p>
                <p className="text-sm opacity-70">Standard ticket</p>
              </div>
              <fieldset className="flex flex-col gap-2">
                <div className="flex gap-5">
                  <div>
                    <Label htmlFor={"firstname" + index}>Firstname</Label>
                    <Input
                      type="text"
                      id={"firstname" + index}
                      name={"firstname-" + index}
                      value={localPersonData[index].name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor={"surname" + index}>Surname</Label>
                    <Input
                      type="text"
                      id={"surname" + index}
                      name={"surname-" + index}
                      value={localPersonData[index].surname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor={"email" + index}>E-mail</Label>
                  <Input
                    type="email"
                    id={"email" + index}
                    name={"email-" + index}
                    value={localPersonData[index].email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor={"phone" + index}>Phone</Label>
                  <Input
                    type="tel"
                    id={"phone" + index}
                    name={"phone-" + index}
                    value={localPersonData[index].phone}
                    onChange={handleChange}
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
