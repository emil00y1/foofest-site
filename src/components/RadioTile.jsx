import Image from "next/image";

function RadioTile({ area, availableSpots, spots, img }) {
  return (
    <div className="flex items-center">
      <label
        htmlFor={area}
        className="cursor-pointer px-4 peer-checked:border-yellowaccent peer-focus-visible:ring peer-focus-visible:ring-orange-700 peer-focus-visible:ring-offset-2 w-full border-forground border-2 check:border-yellowaccent rounded-md flex items-center"
      >
        <input type="radio" name="area" id={area} className="peer focus:outline-none accent-yellowaccent mr-6" />
        <span className="peer-checked:text-yellowaccent">
          <span className="block text-xl">{area}</span>

          <span className="block">
            {availableSpots}/{spots} spots left
          </span>
        </span>

        <Image src={img} alt={area} width="214" height="107"></Image>
      </label>
    </div>
  );
}

export default RadioTile;
