import styles from "./Product.module.css";

import PageVisualization from "component/common/molecules/PageVisualization";
import MiddleTitle from "component/common/atoms/MiddleTitle";
import { ContentBox, ContentInner } from "component/common/atoms/Containers";
import {
  Cooperations,
  FederatedItem,
  InquiryItem,
  ProductContainer
} from "./Items";
import ImageItem from "component/common/atoms/ImageItem";

const BlockChainPlatform = () => {
  return (
    <ProductContainer>
      <PageVisualization
        category="데이터 신뢰성과 보안성을 강화시켜주는"
        title="F@AI BLOKCHAIN<br>Platform"
        description="투명한 기록, 안전한 공유,<br>영속적인 검증으로 데이터 신뢰성 강화"
        position="product"
        visual="block-chain"
      />
      <ContentBox>
        <Cooperations />
      </ContentBox>
      <ContentBox>
        <ContentInner gap={{ top: "100px", bottom: "100px" }}>
          <FederatedItem />
        </ContentInner>
      </ContentBox>
      <ContentBox isFull={true}>
        <div className={styles.light}>
          <MiddleTitle
            content="F@AI Blockchain Platform"
            size="small"
            color="static"
          />
          <ImageItem
            imgFile={"chart_fai.png"}
            alt="Fai Blockchain Platform Architecture"
          />
        </div>
      </ContentBox>
      <ContentBox isFull={true}>
        <InquiryItem />
      </ContentBox>
    </ProductContainer>
  );
};

export default BlockChainPlatform;
