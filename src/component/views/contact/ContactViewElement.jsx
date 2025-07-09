import { useTranslation } from "react-i18next";

import styled from "styled-components";
import IconButton from "component/common/IconButton";
import { CompanyInfoKeys } from "datas/constant";
import PageSection from "component/layout/PageSection";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";

const StyledCompanyInfo = styled.div`
  position: relative;
  p {
    font-weight: 800;
    font-size: ${({ theme }) => theme.toRem(32)};
    em {
      color: ${({ theme }) => theme.colors.pointColor};
    }
  }
  ul {
    color: ${({ theme }) => theme.colors.darkGrayColor};
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    li {
      // width: 50%;
      line-height: ${({ theme }) => theme.toRem(32)};
      margin-right: 2rem;
      &:last-child {
        width: 100%;
        flex: 1 1 100%;
      }
    }
    em {
      font-weight: 700;
    }
  }
  button {
    width: 25px;
    height: 47px;
    display: block;
    position: absolute;
    padding-right: 25px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    i {
      width: 100%;
      height: 100%;
    }
  }
  @media ${({ theme }) => theme.tablet} {
    margin-top: ${({ theme }) => theme.toRem(40)};
    p {
      font-weight: 800;
      font-size: ${({ theme }) => theme.toRem(24)};
    }
  }
  @media ${({ theme }) => theme.mobile} {
    p {
      font-weight: 700;
    }
    ul {
      li {
        font-size: ${({ theme }) => theme.toRem(14)};
        line-height: ${({ theme }) => theme.toRem(24)};
      }
    }
  }
`;

export const CompanyInfo = () => {
  const { t } = useTranslation(["page"]);
  return (
    <StyledCompanyInfo>
      <p dangerouslySetInnerHTML={{ __html: t(`page:contact.inquiry`) }} />
      <ul>
        {CompanyInfoKeys.map((info, index) => {
          return (
            <Fragment key={index}>
              {info.key !== "address" && (
                <li>
                  <em>{info.title}</em> {t(`page:${"companyInfo"}.${info.key}`)}
                </li>
              )}
            </Fragment>
          );
        })}
      </ul>
      <NavLink to="/inquriy">
        <IconButton name="link" middle />
      </NavLink>
    </StyledCompanyInfo>
  );
};

export const CompanyMap = () => {
  return <div style={{ border: "1px solid #eee", height: "400px" }}> Map</div>;
};

const StyledTransportationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 40px;
  > div {
    &:last-child {
      max-width: 312px;
    }
  }
  @media ${({ theme }) => theme.tablet} {
    flex-direction: column;
    align-items: flex-start;
    padding: 60px;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 50px 20px;
    > div {
      &:last-child {
        max-width: 100%;
        width: 100%;
      }
    }
  }
`;

const StyledTransportation = styled.div`
  strong {
    font-weight: 800;
    font-size: ${({ theme }) => theme.toRem(32)};
  }
  ul {
    margin: 10px 0;
    li {
      line-height: ${({ theme }) => theme.toRem(32)};
      margin-bottom: 6px;
      display: flex;
      i {
        margin-right: 8px;
      }
      em {
        margin-right: 4px;
        font-weight: 800;
        &.name {
          font-weight: 700;
        }
      }
    }
  }
  @media ${({ theme }) => theme.tablet} {
    strong {
      font-size: ${({ theme }) => theme.toRem(24)};
    }
    ul {
      li {
        font-size: ${({ theme }) => theme.toRem(16)};
        line-height: ${({ theme }) => theme.toRem(24)};
      }
    }
  }
  @media ${({ theme }) => theme.mobile} {
    ul {
      li {
        font-size: ${({ theme }) => theme.toRem(14)};
        &:first-child {
          align-items: center;
          i {
            margin-top: -4px;
          }
        }
      }
    }
  }
`;
export const Transportation = ({ history }) => {
  const { t } = useTranslation(["page"]);
  return (
    <PageSection>
      <StyledTransportationContainer>
        <StyledTransportation>
          <strong>Address</strong>
          <ul>
            <li>
              <em className="name">{t(`page:contact.transportation.title`)}</em>
            </li>
            <li>{t(`page:companyInfo.address`)}</li>
          </ul>
          <ul>
            <li>
              <IconButton name="subway" middle />
              <span
                dangerouslySetInnerHTML={{
                  __html: t(`page:contact.transportation.subway`),
                }}
              />
            </li>
            <li>
              <IconButton name="bus" middle />
              <span
                dangerouslySetInnerHTML={{
                  __html: t(`page:contact.transportation.bus`),
                }}
              />
            </li>
          </ul>
        </StyledTransportation>
        <CompanyInfo history={history} />
      </StyledTransportationContainer>
    </PageSection>
  );
};
