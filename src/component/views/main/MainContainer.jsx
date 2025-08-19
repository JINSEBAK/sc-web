import styles from "./Main.module.css";

// media
import MainVisualVideo from "assets/media/main_visual.mp4";
import MainVisualVideo2 from "assets/media/main_visual2.mp4";

import MiddleTitle from "component/common/atoms/MiddleTitle";
import { ContentBox, ContentInner } from "component/common/atoms/Containers";
import {
  CenterContent,
  MainVisual,
  AiSolutionSwiper,
  Bigdata,
  SmartProjects,
  SloganBanner,
  Clients,
  LinkItems,
  BigdataContainer,
  SmartFitContainer
} from "./Items";
import classNames from "classnames";

const MainContainer = () => {
  return (
    <div className={classNames(styles.container, styles.main)}>
      <ContentBox isFull={true}>
        <MainVisual>
          <MiddleTitle
            category="AI로 만드는 미래"
            content="AI와 데이터, 그리고 통합의 힘으로<br>비즈니스에 스마트를 더하다."
            color="reverse"
          />
          <video autoPlay muted loop playsInline className={styles.video}>
            <source src={MainVisualVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles["video-bg"]}></div>
        </MainVisual>
      </ContentBox>
      <ContentBox isFull={true}>
        <ContentInner gap={{ top: "100px", bottom: "100px" }}>
          <div className={styles["inner-txt"]}>
            스마트코어는 AI로 품질을 예측하고,
            <br />
            데이터로 미래를 관리합니다.
          </div>
        </ContentInner>
      </ContentBox>
      <ContentBox isFull={true}>
        <ContentInner gap={{ top: "109px", bottom: "109px" }}>
          <MiddleTitle
            content="AI Solution"
            description="기업의 비즈니스 모델과 산업 특성을 분석하여<br>최적의 AI 도입 전략을 제안하고 개발합니다."
            color="reverse"
          />
          <AiSolutionSwiper />
        </ContentInner>
      </ContentBox>
      <ContentBox isFull={true}>
        <ContentInner>
          <BigdataContainer>
            <MiddleTitle
              content="Bigdata"
              description="데이터의 수집, 저장, 분석, 시각화, 예측까지<br>안정적이고 유기적으로 데이터를 운영합니다."
              color="reverse"
            />
            <Bigdata />
            <video autoPlay muted loop playsInline className={styles.video}>
              <source src={MainVisualVideo2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles["video-bg"]}></div>
          </BigdataContainer>
        </ContentInner>
      </ContentBox>
      <ContentBox isFull={true} mode={"light"}>
        <SmartFitContainer>
          <MiddleTitle
            content="Smart Fit System"
            description="기업의 비즈니스 모델과 산업 특성을 분석하여<br>최적의 AI 도입 전략을 제안하고 개발합니다."
            color="dynamic"
          />
          <SmartProjects />
          <SloganBanner />
        </SmartFitContainer>
      </ContentBox>
      <ContentBox isFull={true}>
        <LinkItems />
        <Clients />
      </ContentBox>
    </div>
  );
};

export default MainContainer;
