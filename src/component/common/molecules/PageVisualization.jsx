// css
import classNames from "classnames";
import styles from "./PageVisualization.module.css";

const PageVisualization = ({
  category,
  title,
  description,
  children,
  position,
  visual
}) => {
  return (
    <div
      className={classNames(styles.container, styles[visual], {
        [styles.prdt]: position === "product"
      })}
    >
      <div className={styles.inner}>
        <div className={styles.hd}>
          <div className={styles.ctg} data-aos="fade-down">
            {category}
          </div>
          <h1
            className={styles["main-tit"]}
            dangerouslySetInnerHTML={{ __html: title }}
            data-aos="fade-up"
            data-aos-delay="500"
          />
          {children && <>{children}</>}
        </div>
        {description && (
          <div
            className={styles.slogan}
            dangerouslySetInnerHTML={{ __html: description }}
            data-aos="fade-up"
            data-aos-delay="900"
          />
        )}
        {/* <div className={styles.name}>SMARTCORE</div> */}
      </div>
    </div>
  );
};

export default PageVisualization;
