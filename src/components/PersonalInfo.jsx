import Headline from "./Headline";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function PersonalInfo({ amount }) {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xl">Ticket 1</p>
            <p className="text-sm opacity-70">Standard ticket</p>
          </div>

          <fieldset className="flex flex-col gap-2">
            <div className="flex gap-5">
              <div>
                <Label htmlFor={"name" + ticket}>Firstname</Label>
                <Input type="text" id={"firstname" + ticket} />
              </div>
              <div>
                <Label htmlFor={"surname" + ticket}>Surname</Label>
                <Input type="text" id={"surname" + ticket} />
              </div>
            </div>
            <div>
              <Label htmlFor={"email" + ticket}>E-mail</Label>
              <Input type="email" id={"email" + ticket} />
            </div>
            <div>
              <Label htmlFor={"phone" + ticket}>Phone</Label>
              <Input type="tel" id={"phone" + ticket} />
            </div>
          </fieldset>
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
