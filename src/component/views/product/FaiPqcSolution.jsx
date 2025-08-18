import PageVisualization from "component/common/molecules/PageVisualization";
import {
  DynamicText,
  FaiMerits,
  FederatedProcess,
  InquiryItem,
  NeedsOfSolution,
  PQCFrameworkChart,
  ProductContainer,
  SolutionProcess
} from "./Items";
import { ContentBox, ContentInner } from "component/common/atoms/Containers";
import MiddleTitle from "component/common/atoms/MiddleTitle";

const FaiPqcSolution = () => {
  return (
    <ProductContainer>
      <PageVisualization
        category="연합학습기반 제품 품질 관리 솔루션"
        title="F@AI PQC Solution"
        description="데이터기반의 플라스틱 생산 스마트 공장<br>새로운 기준을 세우다."
        position="product"
        visual="ai-pqc"
      />
      <ContentBox>
        <DynamicText
          content={
            "공정 변수 데이터와 환경 데이터 및<br>전문가 경험 지식 정보를 활용한<br>연합학습기반<br>플라스틱 사출성형 품질 관리 솔루션"
          }
        />
      </ContentBox>
      <ContentBox>
        <ContentInner gap={{ bottom: "100px" }}>
          <FaiMerits />
        </ContentInner>
      </ContentBox>
      <ContentBox isFull={true}>
        <PQCFrameworkChart>
          <MiddleTitle
            color="reverse"
            size="small"
            content="연합학습 기반 이상탐지 및 품질관리 프레임워크"
          />
        </PQCFrameworkChart>
      </ContentBox>
      <ContentBox>
        <ContentInner gap={{ top: "100px" }}>
          <FederatedProcess />
        </ContentInner>
      </ContentBox>
      <ContentBox>
        <NeedsOfSolution />
      </ContentBox>
      <ContentBox>
        <DynamicText
          content={
            "PQC Solution은<br>생산 효율성 증대, 품질 향상, 비용 절감,<br>AI 기반 플라스틱 스마트 구축 등<br>다양한 이점 제공, 기업의 경쟁력 강화 기여합니다."
          }
        />
      </ContentBox>
      <ContentBox isFull={true}>
        <InquiryItem />
      </ContentBox>
    </ProductContainer>
  );
};

export default FaiPqcSolution;
