import classNames from "classnames";
import styles from "./Dropdown.module.css";
import { useEffect, useRef, useState } from "react";

const Dropdown = ({
  label,
  required = false,
  placeholder = "",
  options = [],
  onChange
}) => {
  const [open, setOpen] = useState(false);
  const [selectItem, setSelectItem] = useState(null);
  const dropdonwRef = useRef(null);

  const onClickDropdown = () => {
    setOpen((prev) => !prev);
  };

  const onSelect = (option) => {
    setSelectItem(option);
    setTimeout(() => setOpen(false), 0);
    if (onChange) {
      onChange(option.value);
    }
  };

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdonwRef.current && !dropdonwRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", onClickOutside);
    return () => window.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div
      ref={dropdonwRef}
      className={classNames(styles.dropdown, { [styles.open]: open })}
      onClick={onClickDropdown}
    >
      <div className={styles.inner}>
        {label && (
          <label className={classNames({ [styles.required]: required })}>
            {label}
          </label>
        )}
        <div className={styles.select}>
          <div
            className={classNames(styles.value, {
              [styles.blank]: !selectItem || !selectItem.text
            })}
          >
            {selectItem && selectItem.text ? selectItem.text : placeholder}
          </div>
          <div className={classNames(styles.options, { [styles.open]: open })}>
            <div className={styles.option}>{placeholder}</div>
            {options.map((option, index) => (
              <div
                className={styles.option}
                key={`option-${index}`}
                onClick={() => onSelect(option)}
              >
                {option.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
