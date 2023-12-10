import Image from "next/image";

function RadioTile({ area, availableSpots, spots, img }) {
  return (
    <div className="flex items-center">
      <label
        htmlFor={area}
        className={`cursor-pointer  p-5 peer-checked:border-yellowaccent peer-focus-visible:ring peer-focus-visible:ring-orange-700 peer-focus-visible:ring-offset-2 w-full border-forground border-2 check:border-yellowaccent rounded-md flex items-center bg-[url('/img/${area}.png')] bg-right bg-contain bg-no-repeat`}
      >
        <input type="radio" name="area" id={area} className="peer focus:outline-none accent-yellowaccent mr-6" />
        <span className="peer-checked:text-yellowaccent">
          <span className="block text-lg">{area}</span>

          <span className="block">
            {availableSpots}/{spots} spots left
          </span>
        </span>
      </label>
    </div>
  );
}

export default RadioTile;
