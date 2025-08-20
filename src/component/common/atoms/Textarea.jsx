//
import styles from "./Textarea.module.css";

import { comma } from "../../../util/common";
import { useState } from "react";

const Textarea = ({
  label,
  value,
  placeholder = "",
  name = "",
  maxLength = 500,
  onChange
}) => {
  const [text, setText] = useState("");

  const onInputText = (e) => {
    setText(e.target.value);
    if (onChange) {
      onChange(name, e.target.value);
    }
  };

  return (
    <div className={styles.box}>
      {label && <label>{label}</label>}
      <textarea
        placeholder={placeholder}
        onInput={onInputText}
        name={name}
        maxLength={maxLength}
      ></textarea>
      <div className={styles.counter}>
        <strong>{comma(text.length)}</strong>/<span>{comma(maxLength)}</span>
      </div>
    </div>
  );
};

export default Textarea;
