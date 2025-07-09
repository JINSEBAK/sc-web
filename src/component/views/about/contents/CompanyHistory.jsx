import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import PageSection from "component/layout/PageSection";
import SectionTitle from "component/common/SectionTitle";
import Content from "component/common/Content";

import { HistoryList, FollowText } from "../AboutViewElements";
import IconButton from "component/common/IconButton";
import MovingHistoryImage from "./MovingHistoryImage";

import { useContext } from "react";
import { LanguageContext } from "store/LangaugeStore";

const SLICE_YEAR = 2018; // 페이징처리 기준 연도

const CompanyHistory = () => {
  const [histories, setHistories] = useState([]);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation(["page"]);
  const { language } = useContext(LanguageContext);

  // 원본
  const datas = t(`history:history`, { returnObjects: true });

  useEffect(() => {
    const tmp = datas.filter((data) => {
      return Number(data.year) >= SLICE_YEAR;
    });
    if (open) {
      setHistories(datas);
    } else {
      setHistories(tmp);
    }
  }, [open, language]);

  return (
    <PageSection className="history">
      <StyledCompanyHistory>
        <div className="picture">
          <SectionTitle
            prevTitle={t(`page:about.history.prevTitle`)}
            title={t(`page:about.history.title`)}
          />
          {/* 이미지 애니메이션 */}
          <MovingHistoryImage />
          <FollowText text={`Smart<br>core`} />
        </div>
        <Content>
          <HistoryList datas={histories} />
          <IconButton
            custom
            name={open ? "arrow-up" : "arrow-down"}
            onClick={() => setOpen((prev) => !prev)}
            style={{ width: "40px", height: "50px" }}
          />
        </Content>
      </StyledCompanyHistory>
    </PageSection>
  );
};

export default CompanyHistory;

const StyledCompanyHistory = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 80px 40px;
  > .picture {
    width: 400px;
  }
  > .content {
    width: calc(100% - 400px);
    margin-left: 110px;
  }

  @media ${({ theme }) => theme.table} {
    > .content {
      margin-left: ${({ theme }) => theme.toRem(70)};
    }
  }

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
    padding: 50px 20px;
    > .picture {
      padding: ${({ theme }) => theme.toMRem(10)};
    }
    > .content {
      width: 100%;
      margin-left: 0;
      padding: 0 ${({ theme }) => theme.toMRem(20)};
    }
  }
`;
