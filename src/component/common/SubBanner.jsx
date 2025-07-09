import styled from "styled-components";
import GraphicObject from "../../../common/GraphicObject";
import Tabs from "../../../common/Tabs";

import { AboutMenu } from "../../../../datas/constant";
import { useTranslation } from "react-i18next";

const StyledSubBanner = styled.div`
  background-color: #fff;
`;

const StyledTabContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  margin: 15px 16.6vw 0;
  padding-right: 40px;
  &::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -7px;
    z-index: 0;
    background-color: ${({ theme }) => theme.colors.borderColor};
  }
  &::after {
    content: "";
    display: block;
    width: 70vw;
    height: 1px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -1px;
    z-index: 0;
    background-image: linear-gradient(to right, #e94162, #dadfe9, #dadfe9);
  }
`;

const StyledVisualTitle = styled.div`
  font-size: ${({ theme }) => theme.toRem(60)};
  position: absolute;
  left: 680px;
  top: 230px;
  p {
    &:nth-of-type(2) {
      text-indent: 48px;
      margin-top: 1rem;
    }
    &:nth-of-type(3) {
      text-indent: 96px;
      margin-top: 1rem;
    }
  }
`;

const SubBanner = ({ activeTab, onChangeTab }) => {
  const { t } = useTranslation(["page"]);
  return (
    <StyledSubBanner>
      <div
        style={{
          position: "absolute",
          left: "348px",
          top: "170px",
          color: "#fff",
          fontWeight: "800",
          fontSize: "24px",
        }}
      >
        About us
      </div>
      <StyledVisualTitle>
        <p>{t("page:about.visual.txt", { context: "1" })}</p>
        <p>{t("page:about.visual.txt", { context: "2" })}</p>
        <p>{t("page:about.visual.txt", { context: "3" })}</p>
      </StyledVisualTitle>
      <GraphicObject triangle width={732} height={536} color={"#016BE8"} />
      <GraphicObject
        triangle
        width={559}
        height={409}
        color={"rgba(228, 17, 59, 0.8)"}
        style={{ position: "absolute", left: "253px", top: "167px" }}
      />
      {/* tab menu */}
      <StyledTabContainer>
        <Tabs
          menu={AboutMenu}
          activeTab={activeTab}
          changeTab={onChangeTab}
          rounded
        />
      </StyledTabContainer>
    </StyledSubBanner>
  );
};

export default SubBanner;
