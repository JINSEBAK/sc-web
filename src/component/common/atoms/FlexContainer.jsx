import classNames from "classnames";
import styles from "./FlexContainer.module.css";

const FlexContainer = ({
  direction = "row",
  gap = 8,
  align = "flex-start",
  wrappable = false,
  children
}) => {
  return (
    <div
      className={classNames(styles.flex, { [styles.wrap]: wrappable })}
      style={{ gap: `${gap}px`, justifyContent: align }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
