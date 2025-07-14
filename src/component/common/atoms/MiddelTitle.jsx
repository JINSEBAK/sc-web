//
import classNames from "classnames";
import styles from "./Title.module.css";
import React from "react";

const MiddleTitle = ({
  content,
  description,
  align = "center",
  size = "medium",
  color = "default"
}) => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles[size], styles[align], styles[color])}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {description && (
          <div
            className={classNames(styles.des)}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </div>
  );
};

export default MiddleTitle;
