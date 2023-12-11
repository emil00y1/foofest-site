import Headline from "./Headline";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function PersonalInfo() {
  return (
    <>
      <Headline>Personal info</Headline>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xl">Ticket 1</p>
            <p className="text-sm opacity-70">Standard ticket</p>
          </div>
          <fieldset className="flex flex-col gap-2">
            <div className="flex gap-5">
              <div>
                <Label htmlFor="name">Firstname</Label>
                <Input type="text" id="firstname" />
              </div>
              <div>
                <Label htmlFor="surname">Surname</Label>
                <Input type="text" id="surname" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" id="email" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input type="tel" id="phone" />
            </div>
          </fieldset>
        </div>
        <div className="flex gap-2 items-center">
          <Checkbox required />
          <Label>Accept terms and conditions</Label>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
