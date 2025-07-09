import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { LabelItem } from "component/common/Items";
import SectionTitle from "component/common/SectionTitle";
import TechIconList from "component/views/about/contents/TechIconList";

const SkillsWeHave = () => {
  const { t } = useTranslation(["page"]);
  return (
    <StyledSkillsWeHave className="sec02">
      <div></div>
      <div>
        <LabelItem
          text="Tech"
          className="label"
          bgColor={"rgba(0,0,0,.5)"}
          square
        />
        <SectionTitle
          title={t(`page:main.section2.title`)}
          description={t(`page:main.section2.description`)}
          main
        />
        <TechIconList middle main />
      </div>
    </StyledSkillsWeHave>
  );
};

export default SkillsWeHave;

const StyledSkillsWeHave = styled.section`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
  > div {
    width: 50%;
    .label {
      display: inline-block;
      margin-bottom: 22px;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
    > div {
      width: 100%;
      padding: 0 20px;
      &:nth-of-type(1) {
        display: none;
      }
    }
  }
`;
