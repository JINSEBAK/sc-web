// css
import styles from "../AI.module.css";

// components
import { ContentBox } from "component/common/atoms/Containers";
import {
  AiVisualBox,
  CardItem,
  DepartmentItem,
  FeatureItem,
  InnerItem,
  ProductItem
} from "./Items";
import FlexContainer from "component/common/atoms/FlexContainer";
import MiddleTitle from "component/common/atoms/MiddleTitle";
import HighLighter from "component/common/atoms/HighLighter";

import { useTranslation } from "react-i18next";

const TabSecondContent = () => {
  //
  const { t } = useTranslation("ai");

  const tech = t(`safety.tech`, { returnObjects: true });
  const funcs = t(`safety.funcs`, { returnObjects: true });
  const benefits = t(`safety.benefits`, { returnObjects: true });

  const getImage = (name) => {
    return require(`assets/imgs/${name}`);
  };

  return (
    <div class={styles.container}>
      <ContentBox isFull={true}>
        <AiVisualBox>
          <>
            각종 센서, CCTV, 설비 로그 등<br />
            다양한 데이터를 분석하여 사고 위험을 사전에 감지하고,
            <br />
            현장의 대응 체계를 자동화 및 고도화 하는 산업 특화형 AI
            시스템입니다.
          </>
        </AiVisualBox>
      </ContentBox>
      <ContentBox pullUp={90}>
        <FlexContainer gap={24} wrappable={true}>
          <>
            {tech.map((t, index) => (
              <CardItem
                key={`tech-card-${index}`}
                title={t.title}
                description={t.description}
                imgUrl={getImage(`img_tech_card0${index + 1}.svg`)}
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
              산업 현장에서 발생할 수 있는
              <HighLighter text="사고와 재난을 예방" />
              하고,
              <br />
              발생 시 <HighLighter text="빠르게 대응" />할 수 있도록
              <br />
              <HighLighter text="인공지능 기반" />의 안전·재난 대응 솔루션을
              제공합니다.
            </>
          }
        />
      </ContentBox>
      <ContentBox>
        <MiddleTitle content="주요기능 및 특장점" size="small" />
        <FlexContainer gap={24} wrappable={true}>
          {funcs.map((func, index) => (
            <DepartmentItem
              key={`func-${index}`}
              title={func.title}
              description={func.description}
              imgUrl={getImage(`func0${index + 1}.png`)}
              type="box"
            />
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
        <InnerItem>
          <FlexContainer gap={10} wrappable={true}>
            {benefits.map((benefit, index) => (
              <FeatureItem
                key={`tech-benefit-${index}`}
                text={benefit}
                type="benefit"
                align="asymmetry"
              />
            ))}
          </FlexContainer>
        </InnerItem>
      </ContentBox>
      <ContentBox>
        <MiddleTitle content="주요 제품" size="small" />
        <FlexContainer gap={10}>
          <ProductItem
            title="AI MiDAS"
            type="solution"
            description="AI기반 제품 품질관리 솔루션"
            targetLink="/product/ai-midas"
          />
        </FlexContainer>
      </ContentBox>
    </div>
  );
};

export default TabSecondContent;
