import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { VisionItems } from "../AboutViewElements";

// images
import VisionImg from "../../../../assets/images/bg_sub01_img11.png";
import VisionImg2 from "../../../../assets/images/bg_sub01_img12.png";

const CompanyVision = () => {
  const { t } = useTranslation(["page"]);
  return (
    <StyledCompanyVision>
      <div className="vision-img" />
      <div className="vision-text">
        <span className="label">Vision</span>
        <p
          dangerouslySetInnerHTML={{
            __html: t("page:about.info.vision.text")
          }}
        />
      </div>
      <div className="vision-items">
        <VisionItems />
      </div>
    </StyledCompanyVision>
  );
};

export default CompanyVision;

const StyledCompanyVision = styled.section`
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  min-height: 912px;
  position: relative;
  > div {
    flex: 1;
    max-width: 50%;
    transition: 0.3s all;
    &:last-of-type {
      width: 100%;
      height: auto;
      max-width: 100%;
      bottom: 50%;
      position: absolute;
      transform: translateY(140%);
      @media ${({ theme }) => theme.tablet} {
        transform: none;
        bottom: 3rem;
      }
      @media ${({ theme }) => theme.mobile} {
        transform: none;
        bottom: 5rem;
      }
    }
  }

  .vision-img {
    background: url(${VisionImg}) right top no-repeat;
    background-size: cover;
    @media ${({ theme }) => theme.mobile} {
      background-size: cover;
    }
  }
  .vision-text {
    margin-top: ${({ theme }) => theme.toRem(64)};
    background: url(${VisionImg2}) left top no-repeat;
    background-size: cover;
    padding: ${({ theme }) => theme.toRem(60)};
    @media ${({ theme }) => theme.mobile} {
      min-height: 760px;
    }
    .label {
      font-size: ${({ theme }) => theme.toRem(30)};
      color: #6fbaff;
    }
    p {
      margin-top: ${({ theme }) => theme.toRem(20)};
      font-size: ${({ theme }) => theme.toRem(40)};
      line-height: ${({ theme }) => theme.toRem(64)};
      color: #fff;
      em {
        color: #ffe600;
      }
    }
    @media ${({ theme }) => theme.mobile} {
      padding: ${({ theme }) => theme.toRem(60)}
        ${({ theme }) => theme.toRem(20)};
      p {
        font-size: ${({ theme }) => theme.toRem(28)};
        line-height: ${({ theme }) => theme.toRem(42)};
      }
    }
  }

  @media ${({ theme }) => theme.tablet} {
    flex-direction: column;
    > div {
      max-width: 100%;
    }
    .vision-text {
      margin-top: 0;
    }
  }
`;
