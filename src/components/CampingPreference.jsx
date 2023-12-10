"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import NumberInput2 from "./NumberInput2";
import { useState } from "react";
import Divider from "./Divider";
import NextButton from "./NextButton";
import Headline from "./Headline";

function CampingPreference() {
  const [tentTwoAmount, setTentTwoAmount] = useState(0);
  const [tentThreeAmount, setTentThreeAmount] = useState(0);
  const [greenChecked, setGreenChecked] = useState(false);
  const greenChange = (e) => {
    setGreenChecked(e.target.checked);
  };
  const greenValue = greenChecked === true ? 249 : 0;

  return (
    <>
      <Headline>camping preferences</Headline>
      <div className="flex flex-col gap-6">
        <div className="m-0 p-0">
          <input className="peer h-0 w-0 opacity-0 focus:outline-none" id="greencamping" type="checkbox" onChange={greenChange} />
          <div className="border-solid border-2 border-foreground rounded cursor-pointer peer-checked:border-yellowaccent peer-focus-visible:ring peer-focus-visible:ring-orange-700 peer-focus-visible:ring-offset-2 p-2">
            <label className="flex flex-col" htmlFor="greencamping">
              <div className="flex gap-2">
                ADD GREEN CAMPING
                <Popover>
                  <PopoverTrigger>
                    <svg className="fill-foreground opacity-70" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                      <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                  </PopoverTrigger>
                  <PopoverContent className="bg-extradark text-sm" side="top">
                    Green Camping supports our initiatives for a more sustainable future.
                  </PopoverContent>
                </Popover>
              </div>
              <p className="mt-4">249.00</p>
            </label>
          </div>
        </div>
        <section>
          <article>
            <p>ADD 2 PERSON TENT</p>
            <div className="flex justify-between">
              <p>299.00</p>
              <NumberInput2 setAmount={setTentTwoAmount} amount={tentTwoAmount} label="add 2 person tent" />
            </div>
          </article>
          <article>
            <p>ADD 3 PERSON TENT</p>
            <div className="flex justify-between">
              <p>399.00</p>
              <NumberInput2 tentSpace="1" setAmount={setTentThreeAmount} amount={tentThreeAmount} label="add 3 person tent" />
            </div>
          </article>
        </section>
        <Divider />
        <p className="flex justify-end">
          {
            299 * tentTwoAmount + 399 * tentThreeAmount + greenValue
            // 799 * standAmount + 1299 * vipAmount + 99
          }
        </p>
        <NextButton></NextButton>
      </div>
    </>
  );
}

export default CampingPreference;
