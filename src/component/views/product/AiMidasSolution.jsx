// css
import styles from "./Product.module.css";

import PageVisualization from "component/common/molecules/PageVisualization";
import MiddleTitle from "component/common/atoms/MiddleTitle";
import { ContentBox, ContentInner } from "component/common/atoms/Containers";
import {
  DynamicText,
  InquiryItem,
  MeritsOfAimidas,
  ProductContainer
} from "./Items";
import ImageItem from "component/common/atoms/ImageItem";

const AiMidasSolution = () => {
  return (
    <ProductContainer>
      <PageVisualization
        category="지능형 안전시스템"
        title="AI-MiDAS SOLUTION"
        description="MiDAS가 만드는<br>더 빠르고 똑똑한 재난 대응"
        position="product"
      />
      <ContentBox>
        <DynamicText
          content={
            "지능형 안전 시스템은 제조 현장에서<br>다양한 재난·사고 상황에 대응하기 위해<br>AI, IoT, 영상 인식 기술을 통합 적용한<br>선제적 감지+분석+대응 플랫폼"
          }
        />
      </ContentBox>
      <ContentBox isFull={true}>
        <ContentInner gap={{ top: "100px", bottom: "100px" }}>
          <MiddleTitle
            content="AI-MiDAS SOLUTION"
            description={
              "작업자·설비·환경의 데이터를 실시간 수집하고<br>AI 분석을 통해 위험 상황을 예측하거나 조기에 경보를 발령함으로써,<br>인명 피해 최소화 및 공정 안정성 향상 실현"
            }
            color={"reverse"}
          />
          <div className={styles["img-box"]}>
            <ImageItem
              imgFile={"chart_midas.png"}
              alt="AI Midas solution architecure"
            />
          </div>
        </ContentInner>
      </ContentBox>
      <ContentBox>
        <MiddleTitle
          content="AI-MiDAS SOLUTION 장점"
          color="reverse"
          size="small"
        />
        <MeritsOfAimidas />
      </ContentBox>

      <ContentBox isFull={true}>
        <InquiryItem />
      </ContentBox>
    </ProductContainer>
  );
};

export default AiMidasSolution;
