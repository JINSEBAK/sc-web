//
import classNames from "classnames";
import styles from "./Title.module.css";

const MiddleTitle = ({
  content,
  description,
  align = "center",
  size = "medium",
}) => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles[size], styles[align])}>{content}</div>
      {description && (
        <div
          className={classNames(styles.des)}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
};

export default MiddleTitle;
