// css
import styles from "./About.module.css";
// components
import Button from "component/common/atoms/Button";
import ImageItem from "component/common/atoms/ImageItem";
import SplitBar from "component/common/atoms/SplitBar";
import FlexContainer from "component/common/atoms/FlexContainer";
import HighLighter from "component/common/atoms/HighLighter";

import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { ContentInner } from "component/common/atoms/Containers";

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

export const ClientItem = ({ name, imgFile }) => {
  return (
    <div className={styles.client}>
      <ImageItem imgFile={imgFile} alt={name} />
    </div>
  );
};

export const PatentItem = ({ name, imgFile }) => {
  return (
    <div className={styles.patent}>
      <ImageItem imgFile={imgFile} alt={name} />
    </div>
  );
};

export const InfoBook = () => {
  return (
    <div className={styles.info}>
      <ContentInner gap={{ bottom: "40px" }}>
        <FlexContainer>
          <div className={styles.box}>
            <h5 className={styles.tit}>
              프로젝트 <HighLighter text="의뢰" type="emphasize" />
              는?
            </h5>
            <ul>
              <li>
                <ImageItem imgFile={"icon_tel.svg"} />
                <strong>대표전화</strong>
                <span>02.830.0858</span>
              </li>
              <li>
                <ImageItem imgFile={"icon_fax.svg"} />
                <strong>팩스</strong>
                <span>02.857.0885</span>
              </li>
              <li>
                <ImageItem imgFile={"icon_email.svg"} />
                <strong>이메일</strong>
                <a href="mailto:office@smcore.co.kr">office@smcore.co.kr</a>
              </li>
            </ul>
          </div>
          <div className={styles.box}>
            <h5 className={styles.tit}>Address</h5>
            <ul>
              <li style={{ lineHeight: 2 }}>
                주식회사 스마트코어
                <br />
                서울특별시 금천구 가산동 벚꽃로 298 대륭포스트타워 16층 1607호
              </li>
              <li>
                <ImageItem imgFile={"icon_subway.svg"} />
                <strong>지하철</strong>
                <span>
                  1,7호선 가산디지털단지역 지하통로 연결(2번, 3번 출구 사이 지하
                  통로(
                </span>
              </li>
              <li>
                <ImageItem imgFile={"icon_bus.svg"} />
                <strong>버스</strong>
                <span>금천03, 금천07, 5616, 5712, 5537</span>
              </li>
            </ul>
          </div>
        </FlexContainer>
      </ContentInner>
    </div>
  );
};

export const MapBox = () => {
  return <div className={styles.map}>Map</div>;
};

export const InquiryBanner = () => {
  return (
    <div className={classNames(styles.banner, styles.inquiry)}>
      <h5 className={styles.tit}>프로젝트 문의</h5>
      <p>
        문의를 남겨주시면
        <br />
        빠른 시일 내 답변드리겠습니다.
      </p>
    </div>
  );
};

export const IntroDocument = () => {
  return (
    <div className={classNames(styles.banner, styles.intro)}>
      <h5 className={styles.tit}>회사소개서</h5>
      <FlexContainer align={"center"}>
        <Button
          text="한글"
          size="tiny"
          variant="translucent"
          shape="round"
          onClick={() => {}}
        />
        <Button
          text="영문"
          size="tiny"
          variant="translucent"
          shape="round"
          onClcik={() => {}}
        />
      </FlexContainer>
    </div>
  );
};

export const HistoryItem = ({ title = "", lists = [] }) => {
  return (
    <div className={styles.row}>
      <div className={styles.inner}>
        <h5 className={styles.title}>{title}</h5>
        <ul>
          {lists.map((list, idx) => (
            <li key={`history-item-${idx}`}>
              <span className={styles.month}>{list.month}</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: list.client
                    ? `[${list.client}]${list.content}`
                    : list.content
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const BizItem = ({ title = "", description = "" }) => {
  return (
    <div className={styles.biz}>
      <h5 className={styles.tit} dangerouslySetInnerHTML={{ __html: title }} />
      <p
        className={styles.cont}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <ImageItem imgFile={"icon_plus.svg"} alt="" />
    </div>
  );
};
