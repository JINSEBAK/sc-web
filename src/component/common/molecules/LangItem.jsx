// css
import classNames from "classnames";
import styles from "./LangItem.module.css";

import { useEffect, useRef, useState } from "react";

const LANGUAGES = [
  { label: "KR", value: "KR" },
  { label: "EN", value: "EN" }
];

const LangItem = () => {
  //
  const [lang, setLang] = useState("KR");
  const [isShow, setIsShow] = useState(false);

  const dropRef = useRef(null);

  const onSelect = (lang) => {
    setLang(lang);
  };

  const onClickOutside = (e) => {
    if (dropRef.current && !dropRef.current.contains(e.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedonw", onClickOutside);
    };
  }, []);

  return (
    <div className={styles.language}>
      <button
        type="button"
        className={styles.btn}
        onClick={() => setIsShow(true)}
      >
        {lang}
      </button>
      <ul
        className={classNames(styles.list, { [styles.show]: isShow })}
        ref={dropRef}
      >
        {LANGUAGES.map((lang, index) => (
          <li
            key={`lang-${index}`}
            className={styles.item}
            onClick={() => onSelect(lang)}
          >
            {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangItem;
