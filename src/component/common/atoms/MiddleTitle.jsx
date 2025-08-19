//
import styles from "./Title.module.css";

import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

const MiddleTitle = ({
  content,
  description,
  align = "center",
  size = "medium",
  color = "default", // default(black), reverse(white), dynamic, static
  category
}) => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles[size], styles[align], styles[color])}>
        {category && <span className={styles.ctg}>{category}</span>}
        {typeof content === "string" ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          content
        )}
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

MiddleTitle.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
  size: PropTypes.oneOf(["small", "medium", "tiny"]),
  color: PropTypes.oneOf(["default", "reverse", "dynamic", "static"])
};
