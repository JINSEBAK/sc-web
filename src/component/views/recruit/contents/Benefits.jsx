import styled from "styled-components";
import { useTranslation } from "react-i18next";

import FlexColList from "component/layout/FlexColList";
import { BenefitItem } from "../RecruitViewElement";
import Icon from "component/common/Icon";
import PageSection from "component/layout/PageSection";
import ExtraAreaContainer from "component/layout/ExtraAreaContainer";

const Benefits = () => {
  const { t } = useTranslation(["page"]);
  const items = t(`page:recruit.benefits.list`, { returnObjects: true });
  return (
    <PageSection>
      <ExtraAreaContainer>
        <StyledBenefits>
          <StyledIconAlign>
            <Icon name="heart1" size={46} />
            <Icon name="heart2" size={46} />
            <Icon name="smile" size={46} />
          </StyledIconAlign>
          <p
            dangerouslySetInnerHTML={{
              __html: t(`page:recruit.benefits.intro`),
            }}
          />
          <FlexColList linebreak cols={3}>
            {items.map((item, index) => (
              <BenefitItem
                key={`benefit-item-${index}`}
                item={item}
                index={index}
              />
            ))}
          </FlexColList>
        </StyledBenefits>
      </ExtraAreaContainer>
    </PageSection>
  );
};

export default Benefits;

const StyledIconAlign = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  gap: ${({ theme }) => theme.toRem(46)};
  margin-bottom: 24px;
`;

const StyledBenefits = styled.div`
  p {
    font-weight: 700;
    text-align: center;
    font-size: ${({ theme }) => theme.toRem(32)};
    line-height: ${({ theme }) => theme.toRem(44)};
    margin-bottom: ${({ theme }) => theme.toRem(80)};
    br:first-of-type,
    br:last-of-type {
      display: none;
    }
  }
  dl {
    dd {
      margin-top: 10px;
      color: #ffd600;
      text-shadow: -1px 0px #000, 0px 1px #000, 1px 0px #000, 0px -1px #000;
      font-family: BMDH;
      font-size: ${({ theme }) => theme.toRem(26)};
      line-height: ${({ theme }) => theme.toRem(32)};
    }
  }

  @media ${({ theme }) => theme.tablet} {
    p {
      margin-bottom: ${({ theme }) => theme.toRem(60)};
    }
    dl {
      dt {
        font-size: ${({ theme }) => theme.toRem(13)};
      }
      dd {
        font-size: ${({ theme }) => theme.toRem(20)};
        line-height: ${({ theme }) => theme.toRem(24)};
      }
    }
  }
  @media ${({ theme }) => theme.mobile} {
    p {
      margin-bottom: ${({ theme }) => theme.toMRem(50)};
      br:first-of-type,
      br:last-of-type {
        display: block;
      }
    }
  }
`;
