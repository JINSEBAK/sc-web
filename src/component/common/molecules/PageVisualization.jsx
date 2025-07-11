// css
import styles from "./PageVisualization.module.css";

const PageVisualization = ({ category, title, description, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.hd}>
          <div className={styles.ctg}>{category}</div>
          <h1 className={styles["main-tit"]}>{title}</h1>
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
