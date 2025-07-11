import styles from "./About.module.css";
import ImageItem from "component/common/atoms/ImageItem";
import SplitBar from "component/common/atoms/SplitBar";

import { useTranslation } from "react-i18next";

export const BasicInfo = () => {
  //
  const { t } = useTranslation("about");

  const infos = t(`infos`, { returnObjects: true });

  return (
    <div className={styles.basic}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <ImageItem imgFile="logo.svg" alt="SmartCore" />
        </div>
        <ul className={styles.infos}>
          {infos.map((info, index) => (
            <li key={`info-${index}`}>
              <span className={styles.lb}>{info.label}</span>
              <span className={styles.txt}>{info.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const MissionItem = ({ title, description }) => {
  return (
    <div className={styles.mission}>
      <div className={styles.inner}>
        <strong>{title}</strong>
        <SplitBar type={"horizontal"} color={"orange"} />
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};
