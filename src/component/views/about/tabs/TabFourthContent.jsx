import PageTitle from "component/common/atoms/PageTitle";
import styles from "../About.module.css";

import { ContentBox } from "component/common/atoms/Containers";
import { InfoBook, InquiryBanner, IntroDocument, MapBox } from "../Items";
import FlexContainer from "component/common/atoms/FlexContainer";

const TabFourthContent = () => {
  return (
    <div className={styles.container}>
      <ContentBox>
        <PageTitle title="오시는 길" emphasize="스마트코어" />
        <InfoBook />
      </ContentBox>
      <ContentBox isFull={true}>
        <MapBox />
      </ContentBox>
      <ContentBox>
        <FlexContainer gap={16} align={"center"}>
          <InquiryBanner />
          <IntroDocument />
        </FlexContainer>
      </ContentBox>
    </div>
  );
};

export default TabFourthContent;
