// css
import styles from "./Product.module.css";
import FlexContainer from "component/common/atoms/FlexContainer";
import ImageItem from "component/common/atoms/ImageItem";

import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";

export const ProductContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export const DynamicText = ({ content }) => {
  return (
    <div
      className={styles["dynamic-txt"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export const Merits = () => {
  const { t } = useTranslation("product");
  const merits = t("merits", { returnObjects: true });
  return (
    <div>
      <div className={styles["em-lb"]}>AI-PQC Solution 장점</div>
      <div className={styles.merits}>
        {merits.map((merit, index) => (
          <div key={`merit-${index}`} className={styles.row}>
            <div className={styles.visual}></div>
            <div className={styles.info}>
              <strong
                className={styles.tit}
                dangerouslySetInnerHTML={{ __html: merit.title }}
              />
              <p
                className={styles.desc}
                dangerouslySetInnerHTML={{ __html: merit.description }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SolutionProcess = () => {
  const { t } = useTranslation("product");
  const process = t("process", { returnObjects: true });
  return (
    <div>
      <div className={styles["em-lb"]}>
        AI 기반 사출 성형 이상 탐지 및<br />
        공정변수 미세조정 프로세스
      </div>
      <div className={styles.process}>
        <div className={styles.row}>
          <div className={styles.step}>
            <ImageItem imgFile={"img_process_01.png"} />
            <strong
              className={styles.tit}
              dangerouslySetInnerHTML={{ __html: process.step1.action }}
            />
            <p
              dangerouslySetInnerHTML={{ __html: process.step1.description }}
            />
          </div>
          <ImageItem imgFile={"img_arrow_down_w.svg"} />
        </div>
        <div className={classNames(styles.row, styles.group)}>
          {process.step2.map((step, index) => (
            <Fragment key={`step-${index}`}>
              <div className={styles.step}>
                <ImageItem imgFile={`img_process_0${index + 2}.png`} />
                <strong
                  className={styles.tit}
                  dangerouslySetInnerHTML={{ __html: step.action }}
                />
                <p dangerouslySetInnerHTML={{ __html: step.description }} />
              </div>
              {index < 2 && <ImageItem imgFile={"img_arrow_right_g.svg"} />}
            </Fragment>
          ))}
        </div>
        <div className={classNames(styles.row, styles.final)}>
          <ImageItem imgFile={"img_arrow_down_w.svg"} />
          <div className={styles.step}>
            <ImageItem imgFile={"img_process_05.png"} />
            <div>
              <strong
                className={styles.tit}
                dangerouslySetInnerHTML={{ __html: process.step3.action }}
              />
              <p
                dangerouslySetInnerHTML={{ __html: process.step3.description }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NeedsOfSolution = () => {
  const { t } = useTranslation("product");
  const needs = t("needs", { returnObjects: true });
  return (
    <div>
      <div className={styles["em-lb"]}>
        왜 AI기반 품질관리 솔루션이 필요한가?
      </div>
      <div className={styles.needs}>
        {needs.map((need, index) => (
          <div key={`need-${index}`} className={styles["need-item"]}>
            <label>{need.label}</label>
            <div
              className={styles.txt}
              dangerouslySetInnerHTML={{ __html: need.description }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const InquiryItem = () => {
  return (
    <div className={styles.inquiry}>
      <span>견적 및 도입 문의</span>
      <p>자세한 내용을 안내해드립니다.</p>
      <div className={styles.btns}>
        <button type="button" className={styles.btn}>
          도입 문의
        </button>
        <button type="button" className={styles.btn}>
          브로슈어 다운로드
        </button>
      </div>
    </div>
  );
};

export const Cooperations = () => {
  const { t } = useTranslation("product");
  const cooperations = t("cooperations", { returnObjects: true });
  return (
    <>
      <div className={styles["em-lb"]}>분산 AI 협업 지원</div>
      <FlexContainer gap={16}>
        {cooperations.map((c, index) => (
          <div className={styles.coop}>
            <p dangerouslySetInnerHTML={{ __html: c }} />
            <div className={styles.chart}></div>
          </div>
        ))}
      </FlexContainer>
    </>
  );
};

export const FederatedItem = () => {
  const { t } = useTranslation("product");
  const federatedItems = t("federatedItems", { returnObjects: true });
  return (
    <div>
      <div className={styles["em-lb"]}>데이터 무결성 및 이력관리</div>
      <FlexContainer gap={16}>
        {federatedItems.map((item, index) => (
          <div className={styles["fed-item"]} key={`fed-item-${index}`}>
            <ImageItem imgFile={`icon_fed_0${index + 1}.svg`} />
            <strong>{item.title}</strong>
            <p dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
        ))}
      </FlexContainer>
    </div>
  );
};
