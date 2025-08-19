// css
import classNames from "classnames";
import styles from "./Title.module.css";

const PageTitle = ({ title, emphasize, children }) => {
  return (
    <div className={styles["page-title"]}>
      {emphasize && (
        <em data-aos="fade-up" data-aos-delay="300">
          {emphasize}
        </em>
      )}
      <h2
        className={classNames(styles.text)}
        dangerouslySetInnerHTML={{ __html: title }}
        data-aos="fade-up"
        data-aos-delay="800"
      />
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default PageTitle;
