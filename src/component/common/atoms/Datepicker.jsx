import styles from "./Datepicker.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import ImageItem from "./ImageItem";

const Datepicker = ({
  label,
  required = false,
  placeholder = "",
  onChange
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const datepickerRef = useRef(null);

  const onChangeDate = (date) => {
    setSelected(date);
    if (onChange) {
      onChange(date);
    }
  };

  useEffect(() => {
    const onClickOutside = (e) => {
      if (datepickerRef.current && !datepickerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", onClickOutside);
    return () => window.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div
      ref={datepickerRef}
      className={classNames(styles.datepicker, { [styles.open]: open })}
    >
      <div className={styles.inner}>
        {label && (
          <label className={classNames({ [styles.required]: required })}>
            {label}
          </label>
        )}
        <div className={styles.ipt}>
          <ImageItem imgFile="icon_calendar.svg" />
          <DatePicker
            dateFormat="yyyy-MM-dd"
            className={styles.picker}
            name=""
            selected={selected}
            onSelect={onChangeDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Datepicker;
