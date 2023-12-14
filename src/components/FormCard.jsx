import { useState, useRef, forwardRef } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const FormCard = ({
  setName,
  setCardNumber,
  setExp,
  setCvcData,
  setPaymentData,
  paymentData,
  errorMsg,
}) => {
  const [cnr, setCnr] = useState("");
  const [my, setMy] = useState("");
  const [cvc, setCvc] = useState("");

  const myInputRef = useRef(null);
  const cvcInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, id, value, maxLength } = e.target;

    setPaymentData((paymentData) =>
      paymentData.map((info, index) =>
        index === 0 ? { ...info, [id]: value } : info
      )
    );

    if (value.length === maxLength) {
      switch (name) {
        case "cnr":
          myInputRef.current.focus();
          break;
        case "my":
          cvcInputRef.current.focus();
          // Optionally add logic for the next input after "my"
          break;
        default:
          break;
      }
    }

    // Update the state based on the input name
    switch (name) {
      case "cnr":
        setCnr(value);
        break;
      case "my":
        setMy(value);
        break;
      case "cvc":
        setCvc(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <fieldset className="flex flex-col gap-2">
        <div>
          <Label htmlFor="cardname">NAME ON PAYMENT CARD</Label>
          <Input type="text" id="cardname" onChange={handleInputChange} />
          {paymentData[0].cardname === "" ? <p>{errorMsg}</p> : null}
        </div>
        <div>
          <Label htmlFor="cardnumber">CARDNUMBER</Label>
          <Input
            id="cardnumber"
            type="text"
            name="cnr"
            value={cnr}
            maxLength="16"
            onChange={handleInputChange}
          />
          {paymentData[0].cardnumber === "" ? <p>{errorMsg}</p> : null}
        </div>
        <div className="flex gap-5">
          <div>
            <Label htmlFor="exdate">Exp. Date</Label>
            <Input
              id="exdate"
              type="text"
              name="my"
              value={my}
              maxLength="4"
              onChange={handleInputChange}
              ref={myInputRef}
            />
            {paymentData[0].exdate === "" ? <p>{errorMsg}</p> : null}
          </div>
          <div>
            <Label htmlFor="cvc">CVC</Label>
            <Input
              id="cvc"
              type="text"
              name="cvc"
              value={cvc}
              maxLength="3"
              onChange={handleInputChange}
              ref={cvcInputRef}
            />
            {paymentData[0].cvc === "" ? <p>{errorMsg}</p> : null}
          </div>
        </div>
      </fieldset>
    </>
  );
};

// Use forwardRef to pass the ref down to the underlying HTML element

export default FormCard;
