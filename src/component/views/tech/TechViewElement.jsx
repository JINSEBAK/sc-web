import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import Icon from "component/common/Icon";

// image
import PatentImage from "assets/images/technique/img_blockchain_patent.png";

const StyledTechLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TechLayout = ({ children }) => {
  return <StyledTechLayout>{children}</StyledTechLayout>;
};

const StyledTechSectionTitle = styled.div`
  text-align: center;
  margin-bottom: 80px;
  h2 {
    display: inline-block;
    font-weight: 800;
    font-size: ${({ theme }) => theme.toRem(80)};
    line-height: ${({ theme }) => theme.toRem(91)};
    background: linear-gradient(116.54deg, #494949 23.44%, #000 72.26%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    br {
      display: none;
    }
  }
  p {
    margin-top: 9px;
    font-size: ${({ theme }) => theme.toRem(20)};
    line-height: ${({ theme }) => theme.toRem(32)};
  }

  @media ${({ theme }) => theme.mobile} {
    margin-bottom: 50px;
    h2 {
      font-size: ${({ theme }) => theme.toMRem(50)};
      line-height: ${({ theme }) => theme.toMRem(56)};
      br {
        display: none;
      }
    }
    P {
      font-size: 1rem;
      line-height: ${({ theme }) => theme.toMRem(24)};
    }
  }
  @media ${({ theme }) => theme.min} {
    p {
      br {
        display: none;
      }
    }
  }
`;

export const TechSectionTitle = ({ chapter }) => {
  const { t } = useTranslation(["page"]);
  const header = t(`page:tech.teches`, { returnObjects: true });
  return (
    <StyledTechSectionTitle>
      <h2 dangerouslySetInnerHTML={{ __html: header[chapter].title }} />
      <p dangerouslySetInnerHTML={{ __html: header[chapter].description }} />
    </StyledTechSectionTitle>
  );
};

const StyledTechSubTitle = styled.div`
  text-align: center;
  h3 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.toRem(40)};
    line-height: ${({ theme }) => theme.toRem(42)};
    &::before {
      content: "▴";
      display: block;
      font-size: 1.6rem;
      line-height: 1rem;
      margin-bottom: 24px;
      color: ${({ theme }) => theme.colors.pointColor};
    }
    br {
      display: none;
    }
  }
  p {
    font-size: ${({ theme }) => theme.toRem(20)};
    line-height: ${({ theme }) => theme.toRem(24)};
    color: #5c5c65;
    margin-top: 8px;
  }

  @media ${({ theme }) => theme.mobile} {
    padding-left: 20px;
    padding-right: 20px;
    h3 {
      font-size: ${({ theme }) => theme.toMRem(30)};
      line-height: ${({ theme }) => theme.toMRem(36)};
      br {
        display: block;
      }
    }
    p {
      font-size: 1rem;
      line-height: ${({ theme }) => theme.toMRem(18)};
    }
  }
`;
export const TechSubTitle = (props) => {
  const { title, subText } = props;
  return (
    <StyledTechSubTitle>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      {subText && <p dangerouslySetInnerHTML={{ __html: subText }} />}
    </StyledTechSubTitle>
  );
};

const StyledTechContent = styled.div`
  margin-bottom: 70px;
  p.description {
    margin: 24px 0;
    text-align: center;
    font-size: ${({ theme }) => theme.toRem(18)};
    line-height: ${({ theme }) => theme.toRem(28)};
  }
  .img-wrap {
    text-align: center;
    font-size: 0;
    img.mob {
      display: none;
    }
  }
  .sub-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    max-width: 870px;
    width: 100%;
    margin: 1.5rem auto;
    li {
      border: 1px solid #004596;
      border-radius: 10px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem 0;
      p {
        font-size: 1rem;
        line-height: 1.375rem;
      }
      em {
        color: #004596;
      }
    }

    @media ${({ theme }) => theme.tablet} {
      max-width: 100%;
    }
    @media ${({ theme }) => theme.mobile} {
      grid-template-columns: repeat(2, 1fr);
      li {
        &:last-of-type {
          br:first-child {
            display: block;
          }
        }
      }
    }
  }

  @media ${({ theme }) => theme.tablet} {
    .img-wrap {
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  @media ${({ theme }) => theme.mobile} {
    padding-left: 20px;
    padding-right: 20px;
    p.description {
      font-size: 1rem;
      line-height: ${({ theme }) => theme.toMRem(22)};
      br {
        display: none;
      }
    }
    .img-wrap {
      img.common {
        display: none;
      }
      img.mob {
        display: block;
      }
    }
  }
`;
export const TechContent = (props) => {
  const { title, description, imgUrl, mobileImgUrl, children } = props;
  return (
    <StyledTechContent>
      {title && title}
      {description && (
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      {imgUrl && (
        <div className="img-wrap">
          <img src={imgUrl} alt={imgUrl} className="common" />
          <img src={mobileImgUrl} alt={mobileImgUrl} className="mob" />
        </div>
      )}

      {children && children}
    </StyledTechContent>
  );
};

const StyledTechCardList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 2rem;
  ${(props) => {
    if (props.vertical) {
      return css`
        flex-direction: column;
        align-items: center;
      `;
    }
  }}
  li {
    flex: 0 0 380px;
    min-height: 243px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    max-width: ${(props) => (props.vertical ? "780px" : "100%")};
    ${(props) => {
      if (props.vertical) {
        return css`
          flex: 1;
          min-width: 780px;
          display: flex;
          min-height: 0;
          align-items: center;
          gap: 30px;
        `;
      }
    }}
    span {
      ${(props) => {
        if (props.vertical) {
          return css`
            flex: 0 0 60px;
          `;
        }
      }}
    }
  }
  dl {
    ${(props) => {
      if (props.vertical) {
        return css`
          text-align: left;
        `;
      }
    }}
    dt {
      font-weight: 700;
      font-size: ${({ theme }) => theme.toRem(24)};
      line-height: ${({ theme }) => theme.toRem(28)};
      letter-spacing: -4%;
      margin: 13px 0 10px;
      ${(props) => {
        if (props.vertical) {
          return css`
            margin-top: 0;
          `;
        }
      }}
    }
    dd {
      font-size: ${({ theme }) => theme.toRem(16)};
      line-height: ${({ theme }) => theme.toRem(24)};
    }
  }
  @media ${({ theme }) => theme.tablet} {
    li {
      ${(props) => {
        if (props.vertical) {
          return css`
            min-width: 100%;
          `;
        }
      }}
    }
  }
  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
    li {
      flex: 1;
      min-height: 0;
      ${(props) => {
        if (props.vertical) {
          return css`
            flex-direction: column;
          `;
        }
      }}
    }
    dl {
      ${(props) => {
        if (props.vertical) {
          return css`
            text-align: center;
          `;
        }
      }}
    }
  }
`;

/**
 *
 * @param {*} datas page.json에 정의된 object 형태, key와 icon name은 동일하게 설정
 */
export const TechCardList = (props) => {
  const { datas, vertical } = props;
  return (
    <StyledTechCardList vertical={vertical}>
      {Object.keys(datas).map((key, index) => (
        <li key={`tech-iot-${index}`}>
          <Icon name={key} size={60} />
          <dl>
            <dt>{datas[key].title}</dt>
            <dd dangerouslySetInnerHTML={{ __html: datas[key].description }} />
          </dl>
        </li>
      ))}
    </StyledTechCardList>
  );
};

const StyledFintechCont = styled.div`
  background-color: #f1f4fb;
  border-radius: 220px;
  max-width: 840px;
  margin: 0 auto 60px;
  padding: 70px 60px 50px;
  position: relative;
  p {
    font-weight: 700;
    font-size: ${({ theme }) => theme.toRem(24)};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 25px;
    margin: 0;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 28px 45px;
    border-radius: 90px;
    background-color: #fff;
    li {
      border-radius: 100%;
      flex: 0 0 150px;
      position: relative;
      &::after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
      > div {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
      }
      &:nth-of-type(1) {
        background-color: #004596;
      }
      &:nth-of-type(2) {
        background-color: #2c8dff;
      }
      &:nth-of-type(3) {
        background-color: #00ad8f;
      }
      &:nth-of-type(4) {
        background-color: #f59728;
      }
      span {
        margin: auto;
        color: #fff;
        text-align: center;
        font-size: ${({ theme }) => theme.toRem(20)};
        line-height: ${({ theme }) => theme.toRem(22)};
      }
    }
  }
  .line {
    width: 392px;
    height: 60px;
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    &::before {
      content: "";
      display: block;
      width: 2px;
      height: 30px;
      background-color: #83838f;
    }
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 30px;
      border: 2px solid #83838f;
      border-bottom: none;
    }
  }
  @media ${({ theme }) => theme.tablet} {
    ul {
      li {
        span {
          font-size: ${({ theme }) => theme.toRem(16)};
          line-height: ${({ theme }) => theme.toRem(22)};
        }
      }
    }
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 34px 20px 16px;
    border-radius: ${({ theme }) => theme.toMRem(60)};
    ul {
      padding: 12px 18px;
      border-radius: ${({ theme }) => theme.toMRem(60)};
      li {
        span {
          font-size: ${({ theme }) => theme.toMRem(12)};
          line-height: ${({ theme }) => theme.toMRem(16)};
        }
      }
    }
    p {
      font-size: ${({ theme }) => theme.toMRem(16)};
      top: 10px;
    }
    .line {
      width: 50%;
    }
  }
`;

export const FintechContent = ({ title, items }) => {
  return (
    <StyledFintechCont>
      <p>{title}</p>
      <ul>
        {items.length > 0 && (
          <>
            {items.map((item, index) => (
              <li key={`fintech-item-${index}`}>
                <div>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              </li>
            ))}
          </>
        )}
      </ul>
      {/* 연결 라인 */}
      <div className="line" />
    </StyledFintechCont>
  );
};

const StyledPatentBanner = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  background-color: #f1f4fb;
  margin-bottom: 70px;
  padding: 50px 0;
  gap: 40px;
  img {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
  p {
    font-size: ${({ theme }) => theme.toRem(22)};
    line-height: ${({ theme }) => theme.toRem(28)};
    margin-bottom: 26px;
  }
  span {
    font-size: ${({ theme }) => theme.toRem(16)};
    line-height: ${({ theme }) => theme.toRem(26)};
  }

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    img {
      max-width: 200px;
    }
    > div {
      width: 100%;
    }
  }
`;
export const PatentBanner = ({ info }) => {
  return (
    <StyledPatentBanner>
      <img src={PatentImage} alt="certificate of patent" />
      <div>
        <p dangerouslySetInnerHTML={{ __html: info.text }} />
        <span dangerouslySetInnerHTML={{ __html: info.name }} />
      </div>
    </StyledPatentBanner>
  );
};
