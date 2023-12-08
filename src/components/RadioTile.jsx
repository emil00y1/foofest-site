function RadioTile({ area }) {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        name="area"
        id={area}
        className="peer focus:outline-none"
      />
      <label
        htmlFor={area}
        className="cursor-pointer px-4 peer-checked:border-yellowaccent peer-focus-visible:ring peer-focus-visible:ring-orange-700 peer-focus-visible:ring-offset-2 p-1.5"
      >
        {area}
      </label>
    </div>
  );
}

export default RadioTile;
