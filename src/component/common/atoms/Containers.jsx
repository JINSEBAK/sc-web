import styles from "./Containers.module.css";
//
import classNames from "classnames";

// pullUp: marginTop 값을 마이너스처리해야할 때
export const ContentBox = ({
  isFull = false,
  mode = "dark",
  children,
  pullUp = 0
}) => {
  return (
    <div
      className={classNames(styles.content, {
        [styles.full]: isFull,
        [styles.light]: mode === "light"
      })}
      style={{ marginTop: `-${pullUp}px` }}
    >
      {children}
    </div>
  );
};

export const ContentInner = ({ gap = {}, children }) => {
  const style = {
    ...(gap.top && { marginTop: gap.top }),
    ...(gap.bottom && { marginBottom: gap.bottom })
  };
  return <div style={style}>{children}</div>;
};
