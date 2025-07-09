import classNames from "classnames";
import styles from "./Recruit.module.css";

export const ItemBox = ({ type, children }) => {
  return <div className={classNames(styles.box, styles[type])}>{children}</div>;
};
