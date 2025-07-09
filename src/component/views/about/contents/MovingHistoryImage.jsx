import styled from "styled-components";
import { HISTORY_IMG_PATH } from "datas/constant";
import { useTranslation } from "react-i18next";

const MovingHistoryImage = () => {
  const { t } = useTranslation(["page"]);
  const decoText = t(`page:about.history.imageTxt`, { returnObjects: true });
  return (
    <StyledMovingImages>
      {[...Array(7)].map((v, index) => (
        <li
          key={`history-img-${index}`}
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-delay={500 + 400 * index}
        >
          <div className="img-wrap">
            {decoText[index] && (
              <p dangerouslySetInnerHTML={{ __html: decoText[index] }} />
            )}
            <img src={HISTORY_IMG_PATH[index]} alt="history images" />
          </div>
        </li>
      ))}
    </StyledMovingImages>
  );
};

export default MovingHistoryImage;

const StyledMovingImages = styled.ul`
  margin-top: 60px;
  width: 390px;
  li {
    font-size: 0;
    position: relative;
    p {
      font-weight: 800;
      font-size: ${({ theme }) => theme.toRem(32)};
      position: absolute;
      bottom: 1px;
      color: #2b2b2f;
      opacity: 0.7;
      z-index: 4;
      em {
        color: #fff;
      }
    }
    div {
      position: relative;
      display: inline-block;
    }
  }
  li:nth-of-type(1) {
    z-index: 2;
  }
  li:nth-of-type(2) {
    text-align: right;
    margin-top: -58px;
    margin-right: 44px;
    z-index: 1;
    p {
      left: 0;
      transform: translateX(-66%);
    }
  }
  li:nth-of-type(3) {
    padding-left: 36px;
  }
  li:nth-of-type(4) {
    text-align: right;
    &::before {
      content: "&";
      color: #dadfe9;
      margin-right: 6px;
      font-weight: 800;
      font-size: ${({ theme }) => theme.toRem(32)};
      line-height: 1.2rem;
    }
  }
  li:nth-of-type(5) {
    text-align: center;
    margin: 20px 0 30px;
    div {
      margin-left: -1rem;
    }
    p {
      right: 0;
      transform: translateX(50%);
    }
  }
  li:nth-of-type(7) {
    text-align: right;
    margin-top: -222px;
    p {
      transform: translateX(-60%);
    }
  }

  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
`;
