// css
import classNames from "classnames";
import styles from "./HighLighter.module.css";

const HighLighter = ({ text, type }) => {
  return (
    <span className={classNames(styles.highlighter, styles[type])}>{text}</span>
  );
};

export default HighLighter;
