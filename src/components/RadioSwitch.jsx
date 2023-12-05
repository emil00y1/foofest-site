import styles from "./modules/RadioSwitch.module.css";

function RadioSwitch() {
  return (
    <>
      <div className={styles.radioinputs}>
        <label className={styles.radio}>
          <input type="radio" name="radio"></input>
          <span className={styles.name}>HTML</span>
        </label>
        <label className={styles.radio}>
          <input type="radio" name="radio"></input>
          <span className={styles.name}>React</span>
        </label>
      </div>
    </>
  );
}

export default RadioSwitch;
