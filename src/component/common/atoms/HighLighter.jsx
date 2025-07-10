// css
import styles from "./HighLighter.module.css";
import classNames from "classnames";

const HighLighter = ({ text, type = "default" }) => {
  return (
    <span className={classNames(styles.highlighter, styles[type])}>{text}</span>
  );
};

export default HighLighter;
