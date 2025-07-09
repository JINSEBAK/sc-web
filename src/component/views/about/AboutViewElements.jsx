import { Fragment } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import PageSection from "../../layout/PageSection";
import SectionTitle from "../../common/SectionTitle";
import FlexColList from "../../layout/FlexColList";

// datas
import { CrewItem } from "../../common/Items";
import { CrewData, CrewTechnologies } from "datas/constant";
import AboutCustomer from "./contents/AboutCustomer";
import { forwardRef } from "react";
import ExtraAreaContainer from "component/layout/ExtraAreaContainer";
import { TechSubTitle } from "../tech/TechViewElement";

export const Introduction = () => {
  return (
    <>
      <SmartCoreCrew />
    </>
  );
};

export const SmartCoreCrew = () => {
  const { t } = useTranslation(["page"]);
  return (
    <>
      <SectionTitle title="SmartCore Aboout" />
      <CustomBarChart datas={CrewData} />
      <p
        dangerouslySetInnerHTML={{
          __html: t(`page:about.info.sentense`, { context: "1" })
        }}
      />
      <FlexColList>
        {CrewTechnologies.map((tech, index) => (
          <li key={`tech-${index}`}>
            <CrewItem info={tech} />
          </li>
        ))}
      </FlexColList>
    </>
  );
};

const ChartColors = ["skyblue", "navy", "orange", "green"];

const StyledBarChart = styled.div`
  display: flex;
  width: calc(100% + 4rem);
  div {
    color: #fff;
    border-radius: 3rem 0 0 3rem;
    span {
      display: block;
      padding: 1rem;
      height: 100%;
    }
  }
  div:not(:first-child) {
    margin-left: -1.5rem;
  }
  div:last-child {
    border-radius: 3rem;
  }
`;

export const CustomBarChart = ({ datas }) => {
  return (
    <StyledBarChart>
      {datas.map((data, index) => (
        <div
          style={{
            backgroundColor: ChartColors[index],
            width: `${data.value}%`,
            zIndex: index
          }}
          key={`chart-${index}`}
        >
          <span>
            {data.title} {data.value}%
          </span>
        </div>
      ))}
    </StyledBarChart>
  );
};

export const Customers = () => {
  return (
    <PageSection className="client">
      <ExtraAreaContainer>
        <AboutCustomer />
      </ExtraAreaContainer>
    </PageSection>
  );
};

const StyledScrollGraphicText = styled.p`
  font-size: ${({ theme }) => theme.toRem(160)};
  font-weight: 800;
  color: rgba(209, 208, 240, 0.5);
  text-shadow: -7px 01px 10px rgba(255, 255, 255, 0.2);
  text-align: center;
  br {
    display: none;
  }
  @media ${({ theme }) => theme.tablet} {
    font-size: ${({ theme }) => theme.toRem(124)};
  }
  @media ${({ theme }) => theme.mobile} {
    font-size: ${({ theme }) => theme.toMRem(64)};
    br {
      display: block;
    }
  }
`;

export const ScrollGraphicText = (props) => {
  const { text } = props;
  return (
    <StyledScrollGraphicText data-aos="fade-up" data-duration="500">
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </StyledScrollGraphicText>
  );
};

const StyledCompanyVision = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  padding: 1px;
  width: ${({ theme }) => theme.toRem(250)};
  height: ${({ theme }) => theme.toRem(250)};
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(to right bottom, #016be8, #e94162);
  > div {
    background-color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    ${({ theme }) => theme.common.flexCenter};
    dl {
      text-align: center;
      dt {
        font-size: ${({ theme }) => theme.toRem(24)};
        font-weight: 800;
        margin-bottom: 10px;
      }
      dd {
        color: #2b2b2b;
        line-height: ${({ theme }) => theme.toRem(24)};
        em {
          font-weight: 800;
        }
      }
    }
  }
`;
export const CompanyVision = ({ title, description }) => {
  return (
    <StyledCompanyVision>
      <div>
        <dl>
          <dt>{title}</dt>
          <dd dangerouslySetInnerHTML={{ __html: description }} />
        </dl>
      </div>
    </StyledCompanyVision>
  );
};

const StyledHistoryList = styled.ul`
  position: relative;
  margin-top: 2rem;
  li {
    .year {
      font-weight: 700;
      font-size: ${({ theme }) => theme.toRem(32)};
      em {
        color: #e94162;
      }
    }
    margin-bottom: ${({ theme }) => theme.toRem(50)};
  }
  dl {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 1rem;
    dt {
      font-weight: 700;
      width: 40px;
      line-height: ${({ theme }) => theme.toRem(40)};
    }
    dd {
      width: calc(100% - 40px);
      line-height: ${({ theme }) => theme.toRem(40)};
    }
  }

  @media ${({ theme }) => theme.mobile} {
    li {
      margin-bottom: ${({ theme }) => theme.toMRem(30)};
    }
    dl {
      dt {
        line-height: ${({ theme }) => theme.toMRem(24)};
      }
      dd {
        line-height: ${({ theme }) => theme.toMRem(24)};
      }
    }
  }
`;
export const HistoryList = ({ datas }) => {
  return (
    <StyledHistoryList>
      {datas.map((data, index) => {
        return (
          <li key={`history-${index}`}>
            <p className="year">
              {data.year.substr(0, 2)}
              <em>{data.year.substr(2, 2)}</em>
            </p>
            {data.list.length > 0 && (
              <dl>
                {data.list.map((item, index) => (
                  <Fragment key={`${data.year}-${index}`}>
                    <dt>{item.month}</dt>
                    <dd dangerouslySetInnerHTML={{ __html: item.content }} />
                  </Fragment>
                ))}
              </dl>
            )}
          </li>
        );
      })}
    </StyledHistoryList>
  );
};

const StyledFollowText = styled.p`
  margin-top: 50px;
  font-size: ${({ theme }) => theme.toRem(76)};
  line-height: ${({ theme }) => theme.toRem(60)};
  font-weight: 800;
  color: #5c5c65;
  position: relative;
  float: right;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -56%;
    left: 0;
    width: 1px;
    height: 140px;
    background-color: ${({ theme }) => theme.colors.borderColor};
    transform: rotate(35deg);
  }
  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
`;

/**
 *
 * @param {*} open 연혁 오픈 여부, true일 경우 스크롤 따라다님
 */
export const FollowText = forwardRef((props, ref) => {
  const { text } = props;
  return (
    <StyledFollowText dangerouslySetInnerHTML={{ __html: text }} ref={ref} />
  );
});

export const VisionItems = () => {
  const { t } = useTranslation(["page"]);
  const visions = t("page:about.info.vision.items", { returnObjects: true });
  return (
    <StyledVisionItems>
      {visions.map((item, idx) => {
        return (
          <div className="item" key={`vision-${idx}`}>
            <dl>
              <dt>{item.title}</dt>
              <dd dangerouslySetInnerHTML={{ __html: item.description }} />
            </dl>
          </div>
        );
      })}
    </StyledVisionItems>
  );
};

const StyledVisionItems = styled.div`
  position: relative;
  justify-content: center;
  gap: ${({ theme }) => theme.toRem(20)};
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 250px));
  @media ${({ theme }) => theme.tablet} {
    gap: 6px;
    grid-template-columns: repeat(4, minmax(auto, 210px));
  }
  @media ${({ theme }) => theme.mobile} {
    grid-template-columns: repeat(2, minmax(auto, 210px));
  }
  @media ${({ theme }) => theme.min} {
    grid-template-columns: repeat(2, minmax(auto, 180px));
  }
  &::after {
    content: "";
    display: block;
    border: 2px dashed #bdbdbd;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 140px;
    height: 150px;
    width: 1180px;
    z-index: 5;
    @media ${({ theme }) => theme.tablet} {
      width: 90%;
    }
    @media ${({ theme }) => theme.mobile} {
      display: none;
    }
  }
  .item {
    padding: 10px;
    border-radius: 50%;
    background-image: linear-gradient(135deg, #016be8, #e94162);
    min-width: ${({ theme }) => theme.toRem(250)};
    position: relative;
    z-index: 10;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    dl {
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      dt {
        font-size: ${({ theme }) => theme.toRem(24)};
        font-weight: 800;
        margin-bottom: 10px;
      }
      dd {
        text-align: center;
        line-height: ${({ theme }) => theme.toRem(24)};
        strong {
          font-weight: 800;
        }
      }
    }
    &::after {
      content: "";
      display: block;
      width: 100%;
      padding-bottom: 100%;
    }
    @media ${({ theme }) => theme.min} {
      min-width: ${({ theme }) => theme.toRem(180)};
      dl {
        dt {
          font-size: 1.25rem;
        }
      }
    }
  }
`;

export const WindowTitle = (props) => {
  const { title, subTitle } = props;
  return (
    <StyledWindowTitle>
      <TechSubTitle title={title} subTitle={subTitle} />
    </StyledWindowTitle>
  );
};

const StyledWindowTitle = styled.div`
  background-color: #fff;
  padding: ${({ theme }) => theme.toRem(150)} 0 3rem;
`;
