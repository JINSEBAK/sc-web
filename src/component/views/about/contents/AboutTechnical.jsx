import styled from "styled-components";
import { AboutTriangleGraphic } from "../../../../datas/constant";
import TechIconList from "./TechIconList";
import PageSection from "component/layout/PageSection";
import ObjectTriangle from "component/common/ObjectTriangle";
import { useTranslation } from "react-i18next";
import { WindowTitle } from "../AboutViewElements";

const AboutTechnical = () => {
  const { t } = useTranslation(["page"]);
  const graphicTxt = t("page:about.info.technical.crew", {
    returnObjects: true
  });
  return (
    <PageSection>
      <WindowTitle title={t(`page:about.info.technical.title`)} />
      <StyledAboutTechnical>
        <div className="intro">
          <p
            className="head"
            dangerouslySetInnerHTML={{
              __html: t(`page:about.info.technical.main`)
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t(`page:about.info.technical.description`)
            }}
          />

          <TechIconList middle />
        </div>
        <div className="graphic">
          <div className="obj-wrap">
            {AboutTriangleGraphic.map((graphic, index) => (
              <ObjectTriangle
                key={`graphic-${index}`}
                shadow
                width={graphic.width}
                height={graphic.height}
                color={graphic.color}
                data-aos={"fade-up"}
                data-aos-duration={500}
                data-aos-delay={500 * index + 500}
                label={graphicTxt[index]}
                style={{
                  position: "absolute",
                  top: graphic.top,
                  left: graphic.left,
                  zIndex: graphic.zIndex
                }}
              />
            ))}
          </div>
        </div>
      </StyledAboutTechnical>
      {/* 2023-03-06 추가 */}
      <StyledAboutTechnical>
        <div className="intro intro-block">
          <p
            className="head"
            dangerouslySetInnerHTML={{
              __html: t(`page:about.info.technical.main2`)
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t(`page:about.info.technical.description2`)
            }}
          />
          <div className="link">
            <span>{t(`page:common.link.label`)}</span>
            <div className="link-btns">
              <a
                href="https://drive.google.com/file/d/1FTFYX7kWiQ-s--80nRqrIRoojm-D43rl/view?usp=drive_link"
                target="_blank"
              >
                {t(`page:common.link.ko`)}
              </a>
              <span className="bar" />
              <a
                href="https://drive.google.com/file/d/12ZhiG0OP0THvxC-kDbeOiss2XT3N4_Ao/view?usp=sharing"
                target="_blank"
              >
                {t(`page:common.link.en`)}
              </a>
            </div>
          </div>
        </div>
      </StyledAboutTechnical>
    </PageSection>
  );
};

export default AboutTechnical;

const StyledAboutTechnical = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 120px 40px 0px;
  > div {
    width: 50%;
    position: relative;
    flex: 1;
    min-height: 256px;
    .obj-wrap {
      width: 100%;
      height: 100%;
      max-width: 474px;
      margin: 0 0 0 auto;
      position: relative;
    }
    &.intro-block {
      width: 100% !important;
    }
  }
  p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.toRem(20)};
    line-height: ${({ theme }) => theme.toRem(32)};
    &.head {
      font-size: ${({ theme }) => theme.toRem(32)};
      line-height: ${({ theme }) => theme.toRem(42)};
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
  }
  .link {
    display: inline-flex;
    align-items: center;
    margin-top: 4rem;
    background-color: #000;
    color: #fff;
    padding: 0.75rem 2rem;
    gap: 1rem;
    line-height: 1;
    span,
    a {
      line-height: 1.2;
    }
    a {
      color: #fff;
      font-weight: 700;
    }
    .link-btns {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    .bar {
      width: 1px;
      background-color: #fff;
      height: 12px;
      display: inline-block;
    }
  }

  @media ${({ theme }) => theme.tablet} {
    padding: 90px 40px;
    align-items: center;
    > div {
      .obj-wrap {
        transform: scale(0.8);
      }
    }
  }
  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
    padding: 50px 20px;
    > div {
      width: 100%;
      &.graphic {
        margin-top: ${({ theme }) => theme.toMRem(40)};
        min-height: 340px;
      }
      .obj-wrap {
        margin: 40px auto;
        transform: scale(0.7);
        margin-left: -20px;
        @media ${({ theme }) => theme.min} {
          margin-left: -50px;
        }
      }
    }
    p {
      font-size: 1rem;
      line-height: ${({ theme }) => theme.toMRem(24)};
      br:nth-of-type(3) {
        display: none;
      }
      &.head {
        font-size: ${({ theme }) => theme.toMRem(24)};
        line-height: ${({ theme }) => theme.toMRem(34)};
        margin-bottom: ${({ theme }) => theme.toMRem(16)};
      }
    }
  }
`;
