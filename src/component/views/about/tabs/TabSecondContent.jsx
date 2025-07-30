import styles from "../About.module.css";

import PageTitle from "component/common/atoms/PageTitle";
import MiddleTitle from "component/common/atoms/MiddleTitle";
import FlexContainer from "component/common/atoms/FlexContainer";
import { ContentBox } from "component/common/atoms/Containers";
import { useTranslation } from "react-i18next";
import { BizItem } from "../Items";

const TabSecondContent = () => {
  const { t } = useTranslation("about");

  const business = t(`business`, { returnObjects: true });

  return (
    <div className={styles.container}>
      <ContentBox>
        <PageTitle title="주요사업" emphasize="스마트코어">
          <div style={{ textAlign: "center" }}>
            급변하는 IT 환경 속에서 한발 앞선 기술력으로
            <br />
            새로운 비즈니스 가치를 창출하는 스마트코어
          </div>
        </PageTitle>
      </ContentBox>
      <ContentBox>
        <MiddleTitle
          content="SMART AI"
          description="AI기반 사업에 집중하며, 고객 맞춤형 AI 로드맵을 수립하고,<br>기술·비즈니스적 관점에서 실행 가능성을 검토하고 있습니다.<br>기업의 비즈니스 모델과 산업 특성을 분석하여<br>최적의 AI 도입 전략을 제안합니다."
          size="small"
        />
        <FlexContainer gap={16} align={"center"}>
          {business.map((biz, index) => (
            <BizItem
              key={`biz-${index}`}
              title={biz.title}
              description={biz.description}
            />
          ))}
          <div></div>
        </FlexContainer>
      </ContentBox>

      <ContentBox>
        <div>
          AI 솔루션, 빅데이터 분석, SI 수행 등 스마트코어는 기술을 연결해 가치를
          창출합니다.
        </div>
      </ContentBox>

      <ContentBox>
        <MiddleTitle
          content="Smart SI"
          description="고객의 비즈니스 환경에 맞는 맞춤형 시스템을 설계하고,<br>효율성과 생산성을 높이는 통합 솔루션을 제공합니다.<br>안정성과 확장성을 바탕으로 디지털 전환의 중심에서 고객의 성공을 지원합니다."
          size="small"
        />
        <FlexContainer>
          <BizItem
            title="Smart Fit System<br>구축 사업"
            description="스마트코어가 보유한 AI, IoT, Blockchain, Fintech 등<br>다양한 기술과 10여년 이상의 IT 경험을 활용하여 고객 맞춤형 IT 서비스 및 시스템을 제공하고 있습니다.<br><br>IT 전 분야에 대하여 최신 기술을 활용하여 최고의 성능을 구현할 수 있는 소프트웨어를 개발 및 제공합니다."
          />
        </FlexContainer>
      </ContentBox>
    </div>
  );
};

export default TabSecondContent;
