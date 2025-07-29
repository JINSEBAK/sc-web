// css
import styles from "../AI.module.css";
// component
import ImageItem from "component/common/atoms/ImageItem";
import MiddleTitle from "component/common/atoms/MiddelTitle";
import HighLighter from "component/common/atoms/HighLighter";
import FlexContainer from "component/common/atoms/FlexContainer";
import { ContentBox } from "component/common/atoms/Containers";
import {
  AiVisualBox,
  InnerItem,
  CardItem,
  DepartmentItem,
  FeatureItem,
  ProductItem,
} from "./Items";
//
import { useTranslation } from "react-i18next";

const TabFirstContent = () => {
  const { t } = useTranslation("ai");

  const cards = t(`features.cards`, { returnObjects: true });
  const items = t(`features.items`, { returnObjects: true });
  const benefits = t(`features.benefits`, { returnObjects: true });
  const departments = t(`features.departments`, { returnObjects: true });

  const getImage = (name) => {
    return require(`assets/imgs/${name}`);
  };

  return (
    <div className={styles.container}>
      <ContentBox isFull={true}>
        <AiVisualBox>
          <>
            제조, 물류, 금융 등 산업별 니즈에 최적화된 인공지능 솔루션을 설계 및
            구축합니다.
            <br />
            품질 예측, 설비 이상 감지, 수요 예측 등 고도화된 분석 기술을 통해
            <br />
            운영 효율성 극대화를 지원합니다.
          </>
        </AiVisualBox>
      </ContentBox>
      <ContentBox pullUp={90}>
        <FlexContainer gap={24} wrappable={true}>
          <>
            {cards.map((card, index) => (
              <CardItem
                key={`card-${index}`}
                title={card.title}
                description={card.description}
                imgUrl={getImage(`img_ai_card0${index + 1}.svg`)}
              />
            ))}
          </>
        </FlexContainer>
      </ContentBox>
      <ContentBox>
        <MiddleTitle
          content={
            <>
              스마트코어는
              <br />
              다양한 산업분야에서 <HighLighter text="AI기술" />을 이용하여
              <br />
              <HighLighter text="최적의 디지털 플랫폼" />을 구축해 나갑니다.
            </>
          }
        />
      </ContentBox>
      <ContentBox>
        <MiddleTitle content="적용분야 및 기능" size="small" />
        <InnerItem gap={{ top: "0px", bottom: "50px" }}>
          <FlexContainer gap={0}>
            {departments.map((department, index) => (
              <DepartmentItem
                key={`department-${index}`}
                title={department.title}
                description={department.sub}
                imgUrl={getImage(`dep0${index + 1}.jpg`)}
              />
            ))}
          </FlexContainer>
        </InnerItem>
        <InnerItem>
          <FlexContainer gap={10} wrappable={true}>
            {items.map((item, index) => (
              <FeatureItem text={item} key={`feature-${index}`} />
            ))}
          </FlexContainer>
          <img
            src={getImage("bg_arrow.png")}
            style={{
              width: "1060px",
              height: "88px",
              display: "block",
              margin: "10px auto",
            }}
          />
        </InnerItem>
        <InnerItem>
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

      <ContentBox>
        <MiddleTitle content="주요 제품" size="small" />
        <InnerItem>
          <FlexContainer gap={10}>
            <ProductItem
              title="AI-PQC"
              type="solution"
              description="AI기반 제품 품질관리 솔루션"
            />
            <ProductItem
              title="F@AI-PQC"
              type="solution"
              description="연합학습기반 플라스틱 사출성형 품질관리 솔루션"
            />
            <ProductItem
              title="F@AI BLOCKCHAIN"
              type="platform"
              description="보안성이 강화된 블록체인 플랫폼"
            />
          </FlexContainer>
        </InnerItem>
      </ContentBox>
    </div>
  );
};

export default TabFirstContent;
