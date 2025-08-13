// components
import { ContentBox } from "component/common/atoms/Containers";
import MiddleTitle from "component/common/atoms/MiddleTitle";
import PageTitle from "component/common/atoms/PageTitle";
import PageVisualization from "component/common/molecules/PageVisualization";
import FlexContainer from "component/common/atoms/FlexContainer";
import { InnerItem } from "../ai/tabs/Items";
import { useTranslation } from "react-i18next";

import { BigDataTargets, FeatureItem } from "./Items";

const BigDataContainer = () => {
  const { t } = useTranslation("bigdata");

  const features = t(`features`, { returnObjects: true });
  const benefits = t(`benefits`, { returnObjects: true });

  const getImage = (name) => {
    return require(`assets/imgs/${name}`);
  };

  return (
    <>
      <PageVisualization
        category="스마트코어 기술"
        title="BigData 운영사업"
        description="데이터를 연결하고, 가치를 운영한다"
      />
      <PageTitle title="스마트코어 Bigdata" emphasize="최적화된">
        <div>
          스마트코어는 기업의 데이터 자산을 AI기술로 해석하고,
          <br />
          직관적이고 실행 가능한 인사이트로 전환해주는 고도화된 분석·시각화
          플랫폼을 제공하고,
          <br />
          정형/비정형 데이터를 통합하여 실시간 분석과 의사결정 지원 체계를
          구축합니다
        </div>
      </PageTitle>
      <ContentBox isFull={true}>
        <BigDataTargets />
      </ContentBox>

      <ContentBox>
        <MiddleTitle content="주요기능 및 특장점" size="small" />
        <InnerItem gap={{ top: "0px", bottom: "50px" }}>
          <FlexContainer gap={8} wrappable={true}>
            {features.map((feature, index) => (
              <FeatureItem text={feature} key={`feature-${index}`} />
            ))}
          </FlexContainer>
          <img
            src={getImage("bg_arrow.png")}
            style={{
              width: "1060px",
              height: "88px",
              display: "block",
              margin: "10px auto"
            }}
          />
        </InnerItem>
        <InnerItem gap={{ top: "0px", bottom: "180px" }}>
          <FlexContainer gap={10} wrappable={true}>
            {benefits.map((benefit, index) => (
              <FeatureItem
                text={benefit}
                key={`benefit-${index}`}
                type="benefit"
              />
            ))}
          </FlexContainer>
        </InnerItem>
      </ContentBox>
    </>
  );
};

export default BigDataContainer;
