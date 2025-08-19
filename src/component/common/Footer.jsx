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
import GraphicObject from "../common/GraphicObject";

// datas
import { CompanyInfoKeys } from "../../datas/constant";
import ImageItem from "./atoms/ImageItem";

const Footer = ({ isScrolled = false }) => {
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

  // 클릭 시 스크롤 상단으로 이동
  const onSroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.inner}>
          {/* {isScrolled && (
            <button
              type="button"
              className={styles["btn-top"]}
              onClick={onSroll}
            >
              <ImageItem imgFile="icon_top.svg" />
            </button>
          )} */}
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
