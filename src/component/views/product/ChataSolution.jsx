import styles from "./Product.module.css";

import PageVisualization from "component/common/molecules/PageVisualization";
import MiddleTitle from "component/common/atoms/MiddleTitle";
import ImageItem from "component/common/atoms/ImageItem";
import { ContentBox } from "component/common/atoms/Containers";
import {
  InquiryItem,
  ChataSevices,
  BigTypingText,
  ProductContainer
} from "./Items";

const ChataSolution = () => {
  return (
    <ProductContainer bg={"light"}>
      <PageVisualization
        category="스마트 커뮤니케이션 메신저"
        title="CHATA SOLUTION"
        description="소통의 새로운 기준, AI로 진화한 메신저."
        visual="chata"
      />
      <ContentBox isFull={true}>
        <BigTypingText
          content={
            <>
              누구나,언제나, 함께
              <br />
              AI기반 커뮤니케이션 메신저
            </>
          }
        />
      </ContentBox>
      <ContentBox isFull={true}>
        <div className={styles.chata}>
          <MiddleTitle
            content="CHATA Solution"
            description={
              "CHATA-SOLUTION은 기존의 안정적인 SCM 메신저에 AI 챗봇 기능을 융합하여,<br>단순한 메시징을 넘어 업무 자동화, 실시간 정보 안내,<br>개인비서 역할까지 수행하는 스마트 커뮤니케이션 메신저 솔루션."
            }
            size="small"
          />
          <ChataSevices />
        </div>
      </ContentBox>
      <ContentBox isFull={true}></ContentBox>
      <ContentBox isFull={true}>
        <div className={styles.talk}>
          <h3>
            TALK <span>AI</span>
          </h3>
          <ImageItem imgFile={"chart_chata.png"} alt="Chata Architeture" />
        </div>
      </ContentBox>
      <ContentBox isFull={true}>
        <InquiryItem />
      </ContentBox>
    </ProductContainer>
  );
};

export default ChataSolution;
