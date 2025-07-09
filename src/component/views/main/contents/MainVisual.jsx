import { useTranslation } from "react-i18next";
import styled from "styled-components";

const MainVisual = () => {
  const { t } = useTranslation(["page"]);
  return (
    <StyledMainVisual className="sec01">
      <div></div>
      <div>
        <p
          dangerouslySetInnerHTML={{
            __html: t("page:main.section1.description"),
          }}
        />
      </div>
    </StyledMainVisual>
  );
};

export default MainVisual;

const StyledMainVisual = styled.section`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
    justify-content: flex-end;
  }

  > div {
    width: 50%;
    position: relative;
    &:nth-of-type(1) {
      height: 100%;
      display: flex;
      flex-direction: column;
      img:last-of-type {
        transform: translateY(-100%);
      }
    }
    @media ${({ theme }) => theme.mobile} {
      width: 100%;
      padding: 0 30px;
      color: #fff;
      &:nth-of-type(1) {
        height: 0;
      }
      &:nth-of-type(2) {
        padding-bottom: 40px;
      }
    }
  }
  p {
    font-weight: 300;
    font-size: ${({ theme }) => theme.toRem(64)};
    line-height: ${({ theme }) => theme.toRem(76)};
    br:nth-of-type(2),
    br:nth-of-type(5) {
      display: none;
    }

    @media ${({ theme }) => theme.tablet} {
      font-size: ${({ theme }) => theme.toRem(50)};
      line-height: ${({ theme }) => theme.toRem(62)};
    }
    @media ${({ theme }) => theme.mobile} {
      font-size: ${({ theme }) => theme.toMRem(46)};
      line-height: ${({ theme }) => theme.toMRem(54)};
      br {
        display: block !important;
      }
    }
  }
  em {
    &.blue {
      color: #003fe1;
    }
    &.red {
      color: #e21841;
    }
    &.green {
      color: #00c874;
    }
  }
`;
