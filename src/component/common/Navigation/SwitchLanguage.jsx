import styled from "styled-components";
import classNames from "classnames";
import { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "store/LangaugeStore";

const StyledSwitchLanuage = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 2rem;
  position: relative;
  li {
    width: 50px;
    height: 50px;
    position: relative;
    z-index: 10;
    transition: 0.5s all;
    &:last-child {
      position: absolute;
      z-index: 5;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
  button {
    border: none;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    cursor: pointer;
    transition: 0.2s all;
    color: #fff;
    background: linear-gradient(to top, #000 50%, #222 50% 100%);
    &.on {
      z-index: 100;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  &.open {
    z-index: 1101;
  }
  &.down {
    li {
      &:last-child {
        top: 58px;
        opacity: 1;
      }
    }
  }
`;

// 언어 변경
export const SwitchLanguage = ({ open }) => {
  //
  const { language, onChangeLanguage } = useContext(LanguageContext);

  const [down, setDown] = useState(false);

  const onClickSlide = () => {
    setDown((prev) => !prev);
  };

  const onClickOtherLanguage = (lang) => {
    setDown(false);
    onChangeLanguage(lang);
  };

  return (
    <StyledSwitchLanuage className={classNames(open && "open", down && "down")}>
      <li>
        <button className={classNames("on")} onClick={onClickSlide}>
          {language === "ko" ? "KR" : "EN"}
        </button>
      </li>
      <li>
        <button
          className=""
          onClick={() => onClickOtherLanguage(language === "ko" ? "en" : "ko")}
        >
          {language === "ko" ? "EN" : "KR"}
        </button>
      </li>
    </StyledSwitchLanuage>
  );
};
