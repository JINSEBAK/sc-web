import styles from "./Checkbox.module.css";

const Checkbox = ({
  label,
  name,
  value,
  onChange,
  checked,
  disabled = false
}) => {
  return (
    <label className={styles.box}>
      <input type="checkbox" name={name} value={value} disabled={disabled} />
      <span className={styles.check}></span>
      <span dangerouslySetInnerHTML={{ __html: label }}></span>
    </label>
  );
};

export default Checkbox;
