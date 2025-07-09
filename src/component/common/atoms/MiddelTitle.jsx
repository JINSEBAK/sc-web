//
import classNames from "classnames";
import styles from "./Title.module.css";

const MiddleTitle = ({ content, align = "center", size = "medium" }) => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles[size], styles[align])}>{content}</div>
    </div>
  );
};

export default MiddleTitle;
