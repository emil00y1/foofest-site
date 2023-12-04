function RadioTile(data) {
  return (
    <label htmlFor={data.area}>
      {data.area}
      <input type="radio" value={data.area} name="campingarea" key={data.area} id={data.area}></input>
    </label>
  );
}

export default RadioTile;
