import styles from "./Product.module.css";

import PageVisualization from "component/common/molecules/PageVisualization";
import { CareOnService, InquiryItem } from "./Items";
import { ContentBox, ContentInner } from "component/common/atoms/Containers";

const CareOnSolution = () => {
  return (
    <>
      <PageVisualization
        category="통합형 모바일 보안 솔루션"
        title="CareOn Solution"
        description="철저한 디지털 보안과 실시간 안심케어<br>통합형 보안 솔루션"
        visual="care-on"
      />

      <ContentBox>
        <ContentInner gap={{ top: "0px", bottom: "100px" }}>
          <CareOnService />
        </ContentInner>
      </ContentBox>
      <ContentBox isFull={true}>
        <InquiryItem />
      </ContentBox>
    </>
  );
};

export default CareOnSolution;
