import styles from "./BigData.module.css";

import classNames from "classnames";
import { useTranslation } from "react-i18next";

export const FeatureItem = ({ text, type }) => {
  return (
    <div
      className={classNames(styles.feature, { [styles[type]]: type })}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export const BigDataTargets = () => {
  const { t } = useTranslation("bigdata");
  const targets = t("targets", { returnObjects: true });
  return (
    <div className={styles.targets}>
      {targets.map((target, index) => (
        <div key={`target-row-${index}`} className={styles.target}>
          <div className={styles.item}>
            <div
              className={styles.tit}
              dangerouslySetInnerHTML={{ __html: target.title }}
            />
            <div
              className={styles.desc}
              dangerouslySetInnerHTML={{ __html: target.description }}
            />
          </div>
          <div className={styles.visual}>image area</div>
        </div>
      ))}
    </div>
  );
};
