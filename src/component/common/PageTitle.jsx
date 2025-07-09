import styled from "styled-components";
import { useTranslation } from "react-i18next";
import TabContainer from "./TabContainer";
import { MagicWand, TitleObject, ObjectContainer } from "./Items";
import { useEffect } from "react";
import { LNB_MENU } from "datas/constant";
import { useState } from "react";

const PageTitle = (props) => {
  //
  const { pageName, isTab, activeTab, onChangeTab } = props;
  const { t } = useTranslation(["page"]);

  const [menu, setMenu] = useState([]);

  const titleInfo = t(`page:common.gnb`, { returnObjects: true });
  const visualText = t(`page:${pageName}.visual`);

  useEffect(() => {
    if (!pageName) return;
    // tab menu가 있는 화면의 lnb 가져오기
    const lnb = LNB_MENU[pageName];
    if (lnb?.length > 0) {
      setMenu(lnb);
    }
  }, [pageName]);

  return (
    <StyledPageTitle>
      <ObjectContainer>
        <TitleObject name="title-obj-a">
          <TitleObject name="title-obj-b" title={titleInfo[pageName]} />
        </TitleObject>
      </ObjectContainer>

      <StyledWrapper>
        <StyledVisualTitle>
          <div dangerouslySetInnerHTML={{ __html: visualText }} />
        </StyledVisualTitle>
        <TabContainer
          menu={menu}
          isTab={isTab}
          activeTab={activeTab}
          onChangeTab={onChangeTab}
          rounded
        />
        <MagicWand />
      </StyledWrapper>
    </StyledPageTitle>
  );
};

export default PageTitle;

const StyledPageTitle = styled.div`
  // height: 577px;
  height: 30vw;
  position: relative;
  background-color: #fff;
  @media ${({ theme }) => theme.mobile} {
    height: 430px;
  }
`;

const StyledWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  .tab-container {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(50%);
    padding-right: 5%;
  }

  @media ${({ theme }) => theme.mobile} {
    .tab-container {
      padding-right: 0;
      width: 100%;
      left: 50%;
      transform: translate(-50%, 50%);
    }
  }
`;

const StyledVisualTitle = styled.div`
  width: 84%;
  font-size: 3.125vw;
  display: flex;
  flex-direction: row-reverse;
  margin-left: auto;
  padding-right: 3rem;
  > div {
    p {
      text-align: right;
    }
  }
  p {
    &:nth-of-type(2) {
      text-indent: 5rem;
      margin-top: 1rem;
    }
    &:nth-of-type(3) {
      text-indent: 8rem;
      margin-top: 1rem;
    }
    @media ${({ theme }) => theme.mobile} {
      text-indent: 0 !important;
      text-align: left !important;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    position: relative;
    z-index: 5;
    margin: 0 20px;
    text-align: left;
    padding-right: auto;
    padding-left: 0;
    font-size: ${({ theme }) => theme.toMRem(40)};
  }
`;
