import styles from "../AI.module.css";

import React from "react";
import classNames from "classnames";

import ChevronRight from "assets/imgs/icon_chevron_r_dot.svg";
import { useNavigate } from "react-router-dom";

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
      <h4 className={styles.tit} dangerouslySetInnerHTML={{ __html: title }} />
      {description && (
        <p
          className={styles.des}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
};

export const DepartmentItem = ({
  title,
  description,
  imgUrl,
  type = "default"
}) => {
  return (
    <div className={classNames(styles.dept, { [styles.box]: type === "box" })}>
      <div className={styles.img}>
        <strong dangerouslySetInnerHTML={{ __html: title }} />
        <img src={imgUrl} alt={title} />
      </div>
      <p
        className={styles.sub}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

// symmetry: 대칭, asymmetry: 비대칭
export const FeatureItem = ({ text, type, align = "symmetry" }) => {
  return (
    <div
      className={classNames(
        styles.feature,
        { [styles[type]]: type },
        styles[align]
      )}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export const ProductItem = ({
  title,
  type = "solution",
  description,
  targetLink
}) => {
  const navigate = useNavigate();
  const onClickItem = () => {
    navigate(targetLink);
  };
  return (
    <div className={styles.product} onClick={onClickItem}>
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
