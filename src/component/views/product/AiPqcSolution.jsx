import PageVisualization from "component/common/molecules/PageVisualization";
import { ContentBox, ContentInner } from "component/common/atoms/Containers";
import {
  ProductContainer,
  InquiryItem,
  Merits,
  SolutionProcess,
  NeedsOfSolution,
  DynamicText
} from "./Items";

const AiPqcSolution = () => {
  return (
    <ProductContainer bg={"light"}>
      <PageVisualization
        category="AI기반 제품 품질 관리 솔루션"
        title="AI PQC Solution"
        description="데이터기반의 플라스틱 생산 스마트 공장<br>새로운 기준을 세우다."
        position="product"
        visual="ai-pqc"
      />
      <ContentBox>
        <DynamicText
          content={
            "제조 현장에서 발생하는 데이터를<br>실시간으로 분석하여<br>불량률을 예측하고 품질 이상을 조기에 감지하는<br>지능형 품질 관리 솔루션"
          }
        />
      </ContentBox>
      <ContentBox>
        <ContentInner gap={{ bottom: "100px" }}>
          <Merits />
        </ContentInner>
      </ContentBox>
      <ContentBox>
        <SolutionProcess />
      </ContentBox>
      <ContentBox>
        <NeedsOfSolution />
      </ContentBox>
      <ContentBox>
        <DynamicText
          content={
            "PQC Solution은<br>생산 효율성 증대, 품질 향상, 비용 절감,<br>AI 기반 플라스틱 스마트 구축 등<br>다양한 이점 제공, 기업의 경쟁력 강화 기여합니다."
          }
        />
      </ContentBox>
      <ContentBox isFull={true}>
        <InquiryItem />
      </ContentBox>
    </ProductContainer>
  );
};

export default AiPqcSolution;
