import styles from "./Checkbox.module.css";

const Checkbox = ({
  label,
  name,
  value,
  onChange,
  checked,
  disabled = false
}) => {
  //
  const onChangeCheck = (e) => {
    if (onChange) {
      onChange({ checked: e.target.checked, value: e.target.value });
    }
  };

  return (
    <label className={styles.box}>
      <input
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChangeCheck}
      />
      <span className={styles.check}></span>
      <span dangerouslySetInnerHTML={{ __html: label }}></span>
    </label>
  );
};

export default Checkbox;
