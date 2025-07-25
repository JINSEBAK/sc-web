import styles from "./Main.module.css";

// media
import MainVisualVideo from "assets/media/main_visual.mp4";

import MiddleTitle from "component/common/atoms/MiddelTitle";
import { ContentBox, ContentInner } from "component/common/atoms/Containers";
import { CenterContent, MainVisual } from "./Items";

const MainContainer = () => {
  return (
    <div className={styles.container}>
      <ContentBox isFull={true}>
        <MainVisual>
          <MiddleTitle
            content="AI와 데이터, 그리고 통합의 힘으로<br>비즈니스에 스마트를 더하다."
            color="reverse"
          />
          {/* <video autoPlay muted loop playsInline className={styles.video}>
            <source src={MainVisualVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <div className={styles["video-bg"]}></div>
        </MainVisual>
      </ContentBox>
      <ContentBox isFull={true}>
        <ContentInner gap={{ top: "100px", bottom: "100px" }}>
          스마트코어는 AI로 품질을 예측하고, 데이터로 미래를 관리합니다.
        </ContentInner>
      </ContentBox>
      <ContentBox isFull={true}>
        <ContentInner>
          <MiddleTitle
            content="AI Solution"
            description="기업의 비즈니스 모델과 산업 특성을 분석하여<br>최적의 AI 도입 전략을 제안하고 개발합니다."
          />
        </ContentInner>
      </ContentBox>
      <ContentBox isFull={true}>
        <ContentInner>
          <MiddleTitle
            content="Bigdata"
            description="데이터의 수집, 저장, 분석, 시각화, 예측까지<br>안정적이고 유기적으로 데이터를 운영합니다."
          />
        </ContentInner>
      </ContentBox>
      <ContentBox isFull={true}>
        <ContentInner>
          <MiddleTitle
            content="Smart Fit System"
            description="기업의 비즈니스 모델과 산업 특성을 분석하여<br>최적의 AI 도입 전략을 제안하고 개발합니다."
          />
        </ContentInner>
      </ContentBox>
      <ContentBox isFull={true}>
        <div>문의/인재채용</div>
        <div>clients</div>
      </ContentBox>
    </div>
  );
};

export default MainContainer;
