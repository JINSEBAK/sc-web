import classNames from "classnames";
import styles from "./TextInput.module.css";
import { useEffect, useRef, useState } from "react";

const TextInput = ({ label, required = false, placeholder = "", onChange }) => {
  //
  const [focus, setFocus] = useState(false);
  return (
    <div className={classNames(styles.text, { [styles.focus]: focus })}>
      <div className={styles.inner}>
        {label && (
          <label className={classNames({ [styles.required]: required })}>
            {label}
          </label>
        )}
        <div className={styles.input}>
          <input
            type="text"
            placeholder={placeholder}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
