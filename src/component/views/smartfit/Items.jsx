import styles from "./SmartFilt.module.css";

import ImageItem from "component/common/atoms/ImageItem";
import FlexContainer from "component/common/atoms/FlexContainer";

import { useTranslation } from "react-i18next";

export const InnerItem = ({ gap = {}, children }) => {
  const style = {
    ...(gap.top && { marginTop: gap.top }),
    ...(gap.bottom && { marginBottom: gap.bottom })
  };
  return (
    <div className={styles.inner} style={style}>
      {children}
    </div>
  );
};

export const SmartFitBanner = ({ children }) => {
  return <div className={styles["sm-fit"]}>{children}</div>;
};

export const StepItem = ({ title, description, imgFile }) => {
  return (
    <div className={styles.step}>
      <ImageItem imgFile={imgFile} alt={title} />
      <div className={styles.tit}>{title}</div>
      <p
        className={styles.desc}
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
};

export const DevMethodology = () => {
  const { t } = useTranslation("smart");
  const steps = t("steps", { returnObjects: true });
  return (
    <FlexContainer gap={8} align="center">
      {steps.map((step, index) => (
        <StepItem
          key={`step-${index}`}
          title={step.title}
          description={step.description}
          imgFile={`smart_step_${index + 1}.svg`}
        />
      ))}
    </FlexContainer>
  );
};

export const HistoryItem = ({ client, title, date, bgColor }) => {
  return (
    <div className={styles.item} style={{ backgroundColor: bgColor }}>
      <ul className={styles.info}>
        <li className={styles.customer}>{client}</li>
        <li className={styles["project-nm"]}>{title}</li>
        <li className={styles.dt}>{date}</li>
      </ul>
    </div>
  );
};
