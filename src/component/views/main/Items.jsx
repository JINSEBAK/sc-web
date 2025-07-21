import styles from "./Main.module.css";

import classNames from "classnames";

export const CenterContent = ({ children }) => {
  return <div className={styles["cnt-cont"]}>{children}</div>;
};

export const MainVisual = ({ children }) => {
  return <div className={classNames(styles["main-visual"])}>{children}</div>;
};
