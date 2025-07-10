// css
import styles from "./Footer.module.css";
import LogoImage from "assets/imgs/logo_footer.svg";
//
import SplitBar from "./atoms/SplitBar";
import Button from "./atoms/Button";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import IconButton from "./IconButton";
import GraphicObject from "../common/GraphicObject";

// datas
import { CompanyInfoKeys } from "../../datas/constant";

const Footer = () => {
  //
  const { t, i18n } = useTranslation(["page"]);

  const DOCUMENT_URL = {
    ko: "https://drive.google.com/file/d/1FTFYX7kWiQ-s--80nRqrIRoojm-D43rl/view?usp=drive_link",
    en: "https://drive.google.com/file/d/12ZhiG0OP0THvxC-kDbeOiss2XT3N4_Ao/view?usp=sharing"
  };

  const onDownload = () => {
    const current = i18n.language;
    const fileUrl = DOCUMENT_URL[current];

    if (fileUrl) {
      window.open(fileUrl, "_blank");
    } else {
      console.log("언어에 해당하는 파일 없음");
    }
  };

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.info}>
            <div className={styles.logo}>
              <img src={LogoImage} alt="SmartCore Footer LOGO" />
            </div>
            <ul className={styles.address}>
              <li>
                서울특별시 금천구 가산동 벚꽃로 298 대륭포스트타워 6차 1607호
              </li>
              <li>
                <span className={styles.single}>T.</span>
                <span>02 830 0858</span>
              </li>
              <li>
                <span className={styles.single}>F.</span>
                <span>02 857 0885</span>
              </li>
              <li>
                <span className={styles.single}>E-mail.</span>
                <a href="mailto:office@smcore.co.kr">office@smcore.co.kr</a>
              </li>
            </ul>
          </div>
          <div className={styles.docs}>
            <div className={styles.item}>
              <Link to="/">찾아오시는 길</Link>
              <SplitBar />
              <span>회사소개서</span>
              <Button
                text="한글"
                size="small"
                variant="translucent"
                shape="round"
                onClick={onDownload}
              />
              <Button
                text="영문"
                size="small"
                variant="translucent"
                shape="round"
                onClcik={onDownload}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: none;
  padding: ${({ theme }) => theme.toRem(60)} ${({ theme }) => theme.toRem(80)};
  background-color: #fff;
  position: relative;
  padding-top: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 3rem;

  @media ${({ theme }) => theme.tablet} {
    padding: ${({ theme }) => theme.toRem(60)};
  }

  @media ${({ theme }) => theme.mobile} {
    ${({ theme }) => theme.common.flexVertical};
    background-color: #f1f4fb;
    padding: ${({ theme }) => theme.toMRem(40)}
      ${({ theme }) => theme.toMRem(20)};
    align-items: flex-start;
    .obj {
      display: none;
    }
  }
`;

const StyledFooterAddress = styled.address`
  position: relative;
  z-index: 2;

  > em {
    font-size: ${({ theme }) => theme.toRem(32)};
    font-weight: 700;
  }
  ul {
    margin-top: 1.38rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, auto));
    @media ${({ theme }) => theme.min} {
      display: flex;
      flex-direction: column;
    }
    li {
      color: #424242;
      font-size: ${({ theme }) => theme.toRem(24)};
      line-height: ${({ theme }) => theme.toRem(36)};
      &::before {
        content: "";
        background-color: #000;
        opacity: 0.5;
        display: inline-block;
        width: 1px;
        height: 18px;
        margin: 0 1rem -1px;
        @media ${({ theme }) => theme.min} {
          display: none;
        }
      }
      &:nth-of-type(1) {
        width: 100%;
        margin-bottom: 0.5rem;
        grid-column: auto / span 3;
      }
      &:nth-of-type(1),
      &:nth-of-type(2) {
        &::before {
          display: none;
        }
      }
    }
    em {
      font-weight: 800;
      color: #000;
    }
  }
  @media ${({ theme }) => theme.tablet} {
    > em {
      font-size: ${({ theme }) => theme.toRem(24)};
    }
    ul {
      margin-top: 1rem;
      li {
        font-size: ${({ theme }) => theme.toRem(16)};
        line-height: ${({ theme }) => theme.toRem(26)};
        &:nth-of-type(1) {
          margin-bottom: 0;
        }
      }
    }
  }
  @media ${({ theme }) => theme.mobile} {
    > em {
      font-size: ${({ theme }) => theme.toMRem(20)};
    }
    ul {
      li {
        F
        line-height: ${({ theme }) => theme.toRem(22)};
        &::before {
          height: 12px;
          margin: 0 8px -1px;
        }
        &:last-of-type {
          flex: 1 1 100%;
          &::before {
            content: none;
          }
        }
      }
    }
  }
`;

const StyledFooterButton = styled.ul`
  display: flex;
  flex-direction: flex-end;
  > * {
    transition: 0.3s all;
  }
  li {
    margin-left: ${({ theme }) => theme.toRem(80)};
    &:first-of-type {
      margin-left: 0;
    }
  }
  @media ${({ theme }) => theme.tablet} {
    li {
      margin-left: ${({ theme }) => theme.toRem(35)};
    }
  }
  @media ${({ theme }) => theme.mobile} {
    flex-direction: flex-start;
    margin-top: ${({ theme }) => theme.toRem(24)};
    li {
      margin-left: 0;
      margin-right: ${({ theme }) => theme.toRem(32)};
    }
  }
`;

const StyledHiddenButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: 12px;
  left: 0;
  transform: translateX(-100%);
  width: 15px;
  height: 15px;
  opacity: 1;
  a {
    color: transparent;
    cursor: default;
  }
`;
