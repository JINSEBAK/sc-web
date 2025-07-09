// css
import classNames from "classnames";
import styles from "./Title.module.css";

const PageTitle = ({ title, emphasize, children }) => {
  return (
    <div className={styles["page-title"]}>
      {emphasize && <em>{emphasize}</em>}
      <h2 className={classNames(styles.text)}>{title}</h2>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default PageTitle;
