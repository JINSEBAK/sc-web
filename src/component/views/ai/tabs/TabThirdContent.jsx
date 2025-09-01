// css
import styles from "../AI.module.css";

import { ContentBox } from "component/common/atoms/Containers";
import {
  AiVisualBox,
  CardItem,
  DepartmentItem,
  FeatureItem,
  InnerItem
} from "./Items";
import FlexContainer from "component/common/atoms/FlexContainer";

import { useTranslation } from "react-i18next";
import MiddleTitle from "component/common/atoms/MiddleTitle";
import HighLighter from "component/common/atoms/HighLighter";

const TabFirstContent = () => {
  const { t } = useTranslation("ai");

  const tech = t(`chat.tech`, { returnObjects: true });
  const funcs = t(`chat.funcs`, { returnObjects: true });
  const benefits = t(`chat.benefits`, { returnObjects: true });

  const getImage = (name) => {
    return require(`assets/imgs/${name}`);
  };

  return (
    <div className={styles.container}>
      <ContentBox isFull={true}>
        <AiVisualBox>
          <>
            24시간 무중단 대응 체계와 지식기반 확장성을 바탕으로,<br></br>
            기업의 운영 효율성과 고객 만족도를 동시에 높입니다.
          </>
        </AiVisualBox>
      </ContentBox>
      <ContentBox pullUp={90}>
        <FlexContainer gap={24} wrappable={true}>
          {tech.map((t, index) => (
            <CardItem
              key={`chat-card-${index}`}
              title={t.title}
              description={t.description}
              imgUrl={getImage(`img_chat_card0${index + 1}.svg`)}
            />
          ))}
        </FlexContainer>
      </ContentBox>
      <ContentBox>
        <MiddleTitle
          content={
            <>
              스마트코어는
              <br />
              <HighLighter text="GPT 계열 언어모델과 자연어처리(NLP) 기술" />을
              기반으로,
              <br />
              고객과의 소통을 자동화하고 응대 품질을 향상시키는
              <br />
              <HighLighter text="AI 챗봇 솔루션" />을
              <HighLighter text="제공" />
              합니다.
            </>
          }
        />
      </ContentBox>
      <ContentBox>
        <MiddleTitle content="주요기능 및 특장점" size="small" />
        <FlexContainer gap={24} wrappable={true}>
          {funcs.map((func, index) => (
            <DepartmentItem
              key={`chat-func-${index}`}
              title={func.title}
              description={func.description}
              imgUrl={getImage(`chat0${index + 1}.png`)}
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
                key={`chat-benefit-${index}`}
                text={benefit}
                type="benefit"
                align="asymmetry"
              />
            ))}
          </FlexContainer>
        </InnerItem>
      </ContentBox>
    </div>
  );
};

export default TabFirstContent;
