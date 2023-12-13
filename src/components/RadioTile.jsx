import { useState } from "react";

function RadioTile({ area, availableSpots, spots, setChosenArea, chosenArea, setErrorMsg }) {
  const [isAreaChecked, setIsAreaChecked] = useState(false);

  const radioChange = (event) => {
    setErrorMsg("");
    setChosenArea(area);
  };

  return (
    <label
      htmlFor={area}
      className={`radio-label cursor-pointer p-5 first:has(checked):border-yellowaccent w-full border-forground border-2 rounded-md flex items-center bg-[url('/img/nilfheim.png')] bg-right bg-contain bg-no-repeat`}
    >
      <input type="radio" name="area" defaultChecked={chosenArea === area} id={area} className="cursor-pointer peer focus:outline-pink-600 accent-yellowaccent mr-6" onChange={radioChange} />
      <span className="group/info peer-checked:text-yellowaccent group-hover:text-yellowaccent">
        <span className="block text-lg info">{area}</span>

        <span className="block info">
          {availableSpots}/{spots} spots left
        </span>
      </span>
    </label>
  );
}

export default RadioTile;
