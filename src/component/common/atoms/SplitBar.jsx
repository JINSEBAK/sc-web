//
import classNames from "classnames";
import styles from "./SplitBar.module.css";

const SplitBar = ({ type = "vertical", color = "gray" }) => {
  return (
    <div className={classNames(styles.bar, styles[type], styles[color])}></div>
  );
};

export default SplitBar;
