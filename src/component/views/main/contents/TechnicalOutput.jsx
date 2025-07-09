import styled from "styled-components";

import { LabelItem } from "component/common/Items";
import SectionTitle from "component/common/SectionTitle";
import { useTranslation } from "react-i18next";
import { useEffect, Fragment } from "react";
import { getListWork } from "lib/api";
import { RESULT } from "lib/common";
import { useState } from "react";

const initParmas = {
  searchStrDt: null,
  searchEndDt: null,
  searchValue: null,
  searchTypeCd: null,
  searchSorting: "workDts",
  searchOrder: "desc",
  page: 1,
  pageSize: 5,
};

const TechnicalOutput = (props) => {
  //
  const { t } = useTranslation(["page"]);

  const [works, setWorks] = useState([]);

  useEffect(() => {
    getListWork(initParmas).then((data) => {
      if (data.resultCode === RESULT.SUCCESS) {
        setWorks(data.resultData.list);
      }
    });
  }, []);

  return (
    <StyledTechincalOutpup className="sec03">
      <div className="text-front">
        <LabelItem
          text="Projects"
          className="label"
          bgColor={"rgba(0,0,0,.5)"}
          square
        />
        <SectionTitle
          title={t(`page:main.section3.title`)}
          description={t("page:main.section3.description")}
          main
        />
      </div>
      <div className="output-back">
        {works.length > 0 && (
          <>
            {works.map((work, index) => {
              return (
                <Fragment key={`main-work-${index}`}>
                  {work.useYn === "Y" && index < 5 && (
                    <div className="img-item">
                      <div className="img-wrap">
                        <img
                          src={`${process.env.REACT_APP_IMG_URL}${work.workImgPath}`}
                          alt=""
                        />
                      </div>
                    </div>
                  )}
                </Fragment>
              );
            })}
          </>
        )}
      </div>
    </StyledTechincalOutpup>
  );
};

export default TechnicalOutput;

const StyledTechincalOutpup = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
    justify-content: center;
  }

  .text-front {
    z-index: 5;
    width: 50%;
    margin-left: auto;
    @media ${({ theme }) => theme.mobile} {
      width: 100%;
      padding: 0 30px;
    }

    .label {
      display: inline-block;
      margin-bottom: 22px;
    }
  }

  .output-back {
    z-index: 2;
    position: absolute;
    width: calc(100% - 13.4vw);
    height: 100%;
    margin: 0 6.7vw;
    @media ${({ theme }) => theme.tablet} {
      width: calc(100% - 4vw);
      margin: 0 2vw;
    }
    @media ${({ theme }) => theme.mobile} {
      position: relative;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      overflow-x: auto;
      gap: 1rem;
      width: calc(100% - 30px);
      height: auto !important;
      margin: 0 0 0 30px;
    }

    .img-item {
      position: absolute;
      width: 350px;
      height: 350px;
      transition: all 0.3s;
      z-index: 2;
      .img-wrap {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &:nth-of-type(1) {
        left: 0;
        top: 50%;
        transform: translateY(-110%);
      }
      &:nth-of-type(2) {
        left: 0;
        top: 50%;
        transform: translateY(10%);
      }
      &:nth-of-type(3) {
        top: 50%;
        left: 0;
        transform: translateX(120%) translateY(-50%);
        opacity: 0.6;
        z-index: 1;
        @media ${({ theme }) => theme.tablet} {
          transform: translateX(62%) translateY(-50%);
        }
      }
      &:nth-of-type(4) {
        bottom: 80px;
        left: 50%;
        top: 50%;
        transform: translateX(10%) translateY(10%);
        opacity: 0.4;
      }
      &:nth-of-type(5) {
        right: 0;
        top: 50%;
        transform: translateY(-70%);
        opacity: 0.3;
        @media ${({ theme }) => theme.tablet} {
          transform: translateY(-110%);
        }
      }
      @media ${({ theme }) => theme.tablet} {
        width: 274px;
        height: 274px;
      }
      @media ${({ theme }) => theme.mobile} {
        width: 200px;
        height: 200px;
        min-width: 200px;
        position: static;
        transform: none !important;
        opacity: 1 !important;
      }
    }
  }
`;
