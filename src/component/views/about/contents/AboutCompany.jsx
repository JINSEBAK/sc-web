import styled from "styled-components";
import { useTranslation } from "react-i18next";
import PageSection from "component/layout/PageSection";

const AboutCompany = () => {
  const { t } = useTranslation(["page"]);

  return (
    <PageSection>
      <StyledAboutCompany>
        <div
          className="intro"
          dangerouslySetInnerHTML={{ __html: t(`page:about.info.description`) }}
        />
      </StyledAboutCompany>
    </PageSection>
  );
};

export default AboutCompany;

const StyledAboutCompany = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 87px 40px;
  .intro {
    font-size: ${({ theme }) => theme.toRem(32)};
    line-height: ${({ theme }) => theme.toRem(48)};
    strong {
      display: block;
      font-weight: 700;
      font-size: ${({ theme }) => theme.toRem(40)};
      line-height: ${({ theme }) => theme.toRem(44)};
      &:nth-of-type(1) {
        margin-bottom: ${({ theme }) => theme.toRem(24)};
      }
      &:nth-of-type(2) {
        margin: 1rem 0;
      }
    }
    div {
      font-size: ${({ theme }) => theme.toRem(24)};
      line-height: ${({ theme }) => theme.toRem(36)};
      margin-top: ${({ theme }) => theme.toRem(24)};
    }
  }

  @media ${({ theme }) => theme.desktop} {
    .intro {
      font-size: ${({ theme }) => theme.toRem(22)};
      line-height: ${({ theme }) => theme.toRem(32)};
    }
  }
  @media ${({ theme }) => theme.tablet} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 50px 20px;
    .intro {
      width: 100%;
      font-size: ${({ theme }) => theme.toMRem(18)};
      line-height: ${({ theme }) => theme.toMRem(26)};
      strong {
        font-size: ${({ theme }) => theme.toMRem(24)};
        line-height: ${({ theme }) => theme.toMRem(28)};
        &:nth-of-type(1) {
          margin-bottom: ${({ theme }) => theme.toRem(24)};
        }
        &:nth-of-type(2) {
          margin: 1rem 0;
        }
      }
    }
  }
`;
