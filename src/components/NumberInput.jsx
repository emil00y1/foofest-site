import styles from "@/components/modules/NumberInput.module.css";

function NumberInput() {
  return (
    <>
      <label htmlFor="tickets"></label>
      <input className="bg-background border-1" id="tickets" type="number" />
    </>
  );
}

export default NumberInput;
