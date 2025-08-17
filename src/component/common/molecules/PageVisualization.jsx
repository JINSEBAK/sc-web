// css
import classNames from "classnames";
import styles from "./PageVisualization.module.css";

const PageVisualization = ({
  category,
  title,
  description,
  children,
  position
}) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.prdt]: position === "product"
      })}
    >
      <div className={styles.inner}>
        <div className={styles.hd}>
          <div className={styles.ctg}>{category}</div>
          <h1
            className={styles["main-tit"]}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {children && <>{children}</>}
        </div>
        {description && (
          <div
            className={styles.slogan}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        <div className={styles.name}>SMARTCORE</div>
      </div>
    </div>
  );
};

export default PageVisualization;
