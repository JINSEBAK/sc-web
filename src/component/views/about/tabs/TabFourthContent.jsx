import PageTitle from "component/common/atoms/PageTitle";
import styles from "../About.module.css";

import FlexContainer from "component/common/atoms/FlexContainer";
import { ContentBox, ContentInner } from "component/common/atoms/Containers";
import CompanyLocation from "../CompanyLocation";
import { InfoBook, InquiryBanner, IntroDocument } from "../Items";

const TabFourthContent = () => {
  return (
    <div className={styles.container}>
      <ContentBox>
        <PageTitle title="오시는 길" emphasize="스마트코어" />
        <InfoBook />
      </ContentBox>
      <ContentBox isFull={true}>
        <ContentInner gap={{ top: "0px", bottom: "100px" }}>
          {/* <MapBox /> */}
          <CompanyLocation />
        </ContentInner>
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
