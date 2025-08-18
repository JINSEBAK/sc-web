import PageTitle from "component/common/atoms/PageTitle";
import PageVisualization from "component/common/molecules/PageVisualization";
import MiddleTitle from "component/common/atoms/MiddleTitle";
import HistoryList from "./HistoryList";
import { ContentBox } from "component/common/atoms/Containers";
import { InnerItem, DevMethodology, SmartFitBanner } from "./Items";

const SmartFitContainer = () => {
  return (
    <>
      <PageVisualization
        category="전략적 외주 개발 파트너"
        title="Smart Fit System"
        description="기술력, 속도, 유연성을 갖춘 개발 파트너"
        visual="smart-fit"
      />
      <PageTitle title="Smart Fit System<br>구축 사업" emphasize="최적화된">
        <div>
          스마트코어는 2012년부터 현재까지 IT산업을 필요로 하는
          <br />
          다양한 분야에서 서버, 모바일 (안드로이드, 아이폰), 윈도우 기술을
          기반으로 한<br />
          개발 경험과 전문성으로 고객의 비지니스 가치를 극대화할 수 있도록
          <br />
          방향성을 제시하고 시스템을 개발합니다.
          <br />
          <br />
          스마트코어는 완성도 있는 프로젝트를 약속드립니다.
        </div>
      </PageTitle>
      <ContentBox isFull={true}>
        <SmartFitBanner>
          <MiddleTitle
            size="tiny"
            color="reverse"
            content=" AI, Blockchain, IoT, Fintech 분야를 비롯한<br>다양한 프로젝트 개발 경험과 여러 개발 환경에서 5~15년 이상의 경력을 갖춘<br>    기획, 디자인, Frontend, Backend, Application 개발 전문가들이 함께하고 있습니다."
          />
          <InnerItem gap={{ top: "50px" }}>
            <DevMethodology />
          </InnerItem>
        </SmartFitBanner>
      </ContentBox>
      <ContentBox>
        <MiddleTitle content="구축이력" size="small" />
        <InnerItem gap={{ top: "0px", bottom: "180px" }}>
          <HistoryList />
        </InnerItem>
      </ContentBox>
    </>
  );
};

export default SmartFitContainer;
