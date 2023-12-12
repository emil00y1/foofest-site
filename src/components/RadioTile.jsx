import { useState } from "react";

function RadioTile({ area, availableSpots, spots, setChosenArea }) {
  const [isAreaChecked, setIsAreaChecked] = useState(false);

  const radioChange = (event) => {
    setIsAreaChecked(event.target.checked);
    if (isAreaChecked) {
      setChosenArea(area);
    }
  };

  return (
    <label
      htmlFor={area}
      className={`cursor-pointer p-5 peer-checked:border-yellowaccent peer-focus-visible:ring peer-focus-visible:ring-orange-700 peer-focus-visible:ring-offset-2 w-full border-forground border-2 check:border-yellowaccent rounded-md flex items-center bg-[url('/img/nilfheim.png')] bg-right bg-contain bg-no-repeat`}
    >
      <input type="radio" name="area" id={area} className="peer focus:outline-none accent-yellowaccent mr-6" onChange={radioChange} />
      <span className="peer-checked:text-yellowaccent">
        <span className="block text-lg">{area}</span>

        <span className="block">
          {availableSpots}/{spots} spots left
        </span>
      </span>
    </label>
  );
}

export default RadioTile;
