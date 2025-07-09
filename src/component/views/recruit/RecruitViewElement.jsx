import { useTranslation } from "react-i18next";
import Button from "../../common/Button";
import styled from "styled-components";
import { BENEFIT_IMG_PATH } from "datas/constant";

import ResumeImage from "assets/images/bg_resume.png";
import PageSection from "component/layout/PageSection";

const StyledBenefitItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 10px;
  padding: 10px;
  .img-wrap {
    width: 36%;
    margin-right: 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  dl {
    flex: 1 1 20%;
  }
  @media ${({ theme }) => theme.min} {
    max-height: 118px;
    .img-wrap {
      img {
        width: auto;
        max-height: 110px;
        object-fit: unset;
      }
    }
  }
`;
export const BenefitItem = ({ item, index }) => {
  return (
    <StyledBenefitItem>
      <div className="img-wrap">
        {/* svg 이미지의 경우 object 형태임 => default 붙여야함 */}
        <img src={BENEFIT_IMG_PATH[index].default} alt={item.title} />
      </div>
      <dl>
        <dt dangerouslySetInnerHTML={{ __html: item.sub }} />
        <dd dangerouslySetInnerHTML={{ __html: item.title }} />
      </dl>
    </StyledBenefitItem>
  );
};

const StyledDownload = styled.div`
  padding: ${({ theme }) => theme.toRem(54)};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${ResumeImage}) center no-repeat;
  background-size: cover;
  > div {
    text-align: center;
    margin-bottom: 40px;
    color: #fff;
    p {
      font-weight: 700;
      font-size: ${({ theme }) => theme.toRem(32)};
      line-height: ${({ theme }) => theme.toRem(46)};
      margin-bottom: 1rem;
    }
    span {
      font-size: ${({ theme }) => theme.toRem(24)};
      line-height: ${({ theme }) => theme.toRem(28)};
      a {
        text-decoration: underline;
        color: #fff;
      }
    }
  }
  button {
    a,
    a:hover,
    a:focus,
    a:active {
      color: #000;
    }
  }
  @media ${({ theme }) => theme.tablet} {
    > div {
      p {
        font-size: ${({ theme }) => theme.toRem(24)};
        line-height: ${({ theme }) => theme.toRem(32)};
      }
      span {
        font-size: ${({ theme }) => theme.toRem(18)};
        line-height: ${({ theme }) => theme.toRem(20)};
      }
    }
  }

  @media ${({ theme }) => theme.mobile} {
    padding: ${({ theme }) => theme.toMRem(40)}
      ${({ theme }) => theme.toMRem(16)};
    > div {
      margin-bottom: ${({ theme }) => theme.toMRem(24)};
      p {
        font-size: ${({ theme }) => theme.toMRem(24)};
        line-height: ${({ theme }) => theme.toMRem(34)};
        margin-bottom: ${({ theme }) => theme.toMRem(16)};
      }
      span {
        font-size: ${({ theme }) => theme.toMRem(16)};
        line-height: ${({ theme }) => theme.toMRem(20)};
      }
    }
  }
`;

export const DocumentDownload = () => {
  const { t } = useTranslation(["page"]);
  const onClickDownload = () => {
    const url =
      "https://docs.google.com/document/d/1_fPScMuxjFpCQrnGW4gSwMhc8M9NeRz1/edit?usp=sharing&ouid=117114684319117245078&rtpof=true&sd=true";
    window.open(url, "_blank");
  };

  return (
    <PageSection stretch>
      <StyledDownload>
        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: t(`page:recruit.document.description`)
            }}
          />
          <span
            dangerouslySetInnerHTML={{
              __html: t(`page:recruit.document.label`)
            }}
          />
        </div>
        <Button onClickButton={onClickDownload}>
          <span
            dangerouslySetInnerHTML={{
              __html: t(`page:recruit.document.button`)
            }}
          />
        </Button>
      </StyledDownload>
    </PageSection>
  );
};

const StyledPeopleCard = styled.li`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 10px;
  padding: ${({ theme }) => theme.toRem(30)};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  > * {
    transition: 0.3s all;
  }
  h3 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.toRem(32)};
    line-height: ${({ theme }) => theme.toRem(32)};
    flex: 1 1 180px;
  }
  dl {
    flex: 1 1 200px;
    &:last-child {
      flex: 1 1 40%;
    }
  }
  dt {
    font-weight: 700;
    line-height: ${({ theme }) => theme.toRem(24)};
  }
  dd {
    margin-top: 0.5rem;
    line-height: ${({ theme }) => theme.toRem(24)};
    color: ${({ theme }) => theme.colors.darkGrayColor};
    > dl {
      margin-top: 1rem;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.toMRem(20)};
    h3 {
      line-height: ${({ theme }) => theme.toMRem(32)};
      margin-bottom: ${({ theme }) => theme.toMRem(16)};
      max-width: 100%;
      flex: 1;
    }
    > dl {
      flex: 1;
      margin-bottom: ${({ theme }) => theme.toMRem(16)};
      &:last-child {
        margin-bottom: 0;
      }
    }
    dd {
      margin-top: 5px;
      line-height: ${({ theme }) => theme.toMRem(24)};
      > dl {
        margin-top: ${({ theme }) => theme.toMRem(16)};
      }
    }
  }
`;

export const PeopleCard = ({ data }) => {
  const { t } = useTranslation(["page"]);
  return (
    <StyledPeopleCard>
      <h3>{data.title}</h3>
      <dl>
        <dt>{t(`page:recruit.jobsLabel.role`)}</dt>
        <dd dangerouslySetInnerHTML={{ __html: data.details.role }} />
      </dl>
      <dl>
        <dt>{t(`page:recruit.jobsLabel.ability`)}</dt>
        <dd>
          <p dangerouslySetInnerHTML={{ __html: data.details.ability }} />
          {data.title === "Developer" && (
            <>
              {data.details.scope.map((scrop, index) => (
                <dl key={`dev-scrop-${index}`}>
                  <dt dangerouslySetInnerHTML={{ __html: scrop.part }} />
                  <dd dangerouslySetInnerHTML={{ __html: scrop.contents }} />
                </dl>
              ))}
            </>
          )}
        </dd>
      </dl>
    </StyledPeopleCard>
  );
};
