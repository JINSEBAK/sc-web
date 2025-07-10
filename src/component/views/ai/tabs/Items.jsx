import styles from "../AI.module.css";

import React from "react";
import classNames from "classnames";

import ChevronRight from "assets/imgs/icon_chevron_r_dot.svg";

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

export const AiVisualBox = ({ children }) => {
  return <div className={styles.ai}>{children}</div>;
};

export const CardItem = ({ title, description, imgUrl }) => {
  return (
    <div className={classNames(styles.card)}>
      <img src={imgUrl} alt={title} />
      <h4 className={styles.tit}>{title}</h4>
      {description && <p className={styles.des}>{description}</p>}
    </div>
  );
};

export const DepartmentItem = ({ title, description, imgUrl }) => {
  return (
    <div className={styles.dept}>
      <div className={styles.img}>
        <strong>{title}</strong>
        <img src={imgUrl} alt={title} />
      </div>
      <p
        className={styles.sub}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export const FeatureItem = ({ text, type }) => {
  return (
    <div
      className={classNames(styles.feature, { [styles[type]]: type })}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export const ProductItem = ({ title, type = "solution", description }) => {
  return (
    <div className={styles.product}>
      <div>
        <div className={styles.tit}>
          <span>{title}</span>
          <span>{type.toUpperCase()}</span>
        </div>
        {description && <div className={styles.des}>{description}</div>}
      </div>
      <img src={ChevronRight} alt="Move details" />
    </div>
  );
};
