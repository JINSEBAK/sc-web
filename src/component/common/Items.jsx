import { Fragment } from "react";
import styled from "styled-components";

import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { GnbLink } from "../../datas/constant";
import { NavLink, useLocation } from "react-router-dom";
import IconButton from "./IconButton";

// image
import LogoImg from "assets/images/logo.svg";
import Icon from "./Icon";
import HomeButton from "./HomeButton";

const StyledLogo = styled.div`
  margin-right: auto;
  @media ${({ theme }) => theme.mobile} {
    margin-left: 1rem;
    img {
      max-width: 150px;
    }
  }
`;

// 로고
export const Logo = () => {
  return (
    <StyledLogo className="logo">
      <NavLink to="/main">
        <img src={LogoImg} alt="SmartCore Logo" />
      </NavLink>
    </StyledLogo>
  );
};

const StyledGnb = styled.ul`
  ${({ theme }) => theme.common.flexCenter};
  gap: 2.6vw;
`;

// Global Navigation Bar
export const Gnb = (props) => {
  const { t } = useTranslation(["page"]);
  const gnb = t(`page:common.gnb`, { returnObjects: true });
  return (
    <nav id="nav">
      <StyledGnb>
        {Object.keys(gnb).map((key, index) => (
          <Fragment key={`gnb-${index}`}>
            {key !== "recruit" && (
              <GnbItem title={gnb[key]} link={GnbLink[key]?.link} />
            )}
          </Fragment>
        ))}
      </StyledGnb>
    </nav>
  );
};

const StyledGnbItem = styled.li`
  font-size: 22px;
  a {
    text-decoration: none;
    color: #000;
    font-weight: 400;
    line-height: 25px;
    position: relative;
    transition: 0.2s all;
    overflow: hidden;
    &::before {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 100%;
      position: absolute;
      left: 200px;
      top: -20px;
      background-color: transparent;
      transition: 0.2s all;
    }
  }
  &.active {
    > a {
      color: black;
      font-weight: 700;
      &::before {
        left: 50%;
        margin-left: -4px;
        background-color: ${({ theme }) => theme.colors.pointColor};
      }
    }
  }
`;

export const GnbItem = ({ title, link }) => {
  const location = useLocation();
  return (
    <StyledGnbItem
      className={classNames(location.pathname.indexOf(link) > -1 && "active")}
    >
      <NavLink to={link}>{title}</NavLink>
    </StyledGnbItem>
  );
};

const StyledFullScreenGnb = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  z-index: 1100;
  ${({ theme }) => theme.common.flexCenter};
  > .inner {
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.toRem(80)};
  }
  nav > ul {
    gap: ${({ theme }) => theme.toRem(60)};
    li {
      padding: 0;
    }
    a {
      color: #fff;
      font-size: ${({ theme }) => theme.toRem(40)};
      line-height: ${({ theme }) => theme.toRem(56)};
      &.active {
        font-weight: 800;
        color: #fff;
        &::before {
          top: auto;
          bottom: -1rem;
          width: 100%;
          height: 2px;
          border-radius: 2px;
          left: 0;
          margin: 0;
        }
      }
    }
  }
  @media ${({ theme }) => theme.desktop} {
    nav > ul {
      a {
        font-size: ${({ theme }) => theme.toRem(32)};
        line-height: ${({ theme }) => theme.toRem(46)};
      }
    }
  }
  @media ${({ theme }) => theme.tablet} {
    nav > ul {
      gap: ${({ theme }) => theme.toRem(30)};
    }
  }
  @media ${({ theme }) => theme.mobile} {
    nav > ul {
      flex-direction: column;
      gap: ${({ theme }) => theme.toRem(24)};
      a {
        font-size: ${({ theme }) => theme.toRem(26)};
        line-height: ${({ theme }) => theme.toRem(46)};
      }
    }
  }
`;

export const FullScreenGnb = () => {
  return (
    <StyledFullScreenGnb>
      <div className="inner">
        {/* <Icon name="home" size={50} /> */}
        <HomeButton />
        <Gnb />
      </div>
    </StyledFullScreenGnb>
  );
};

const StyledMenuButton = styled.button`
  width: 40px;
  height: 35px;
  padding: 0;
  position: relative;
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 60px;
  height: 60px;
  @media ${({ theme }) => theme.mobile} {
    transform: scale(0.68);
  }
  span {
    background-color: #222;
    display: block;
    width: 40px;
    height: 3px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.3s all;
    transform-origin: center;
    &:nth-child(1) {
      top: 13px;
    }
    &:nth-child(2) {
      top: calc(50% - 2px);
    }
    &:nth-child(3) {
      bottom: 13px;
    }
  }
  &.open {
    z-index: 1101;
    span {
      background-color: #fff;
      &:nth-child(1) {
        transform: rotate(45deg) translateX(-75%);
        top: calc(50% + 20px);
      }
      &:nth-child(2) {
        left: -30px;
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translateX(-75%);
        top: calc(50% - 22px);
      }
    }
  }
`;
export const MenuButton = ({ open, onClickMenu }) => {
  return (
    <StyledMenuButton
      onClick={onClickMenu}
      className={classNames(open && "open")}
    >
      <span />
      <span />
      <span />
    </StyledMenuButton>
  );
};

const StyledLabelItem = styled.span`
  color: #fff;
  line-height: normal;
  font-size: ${({ theme }) => theme.toRem(24)};
  background-color: ${(props) => props.bgColor || "#ccc"};
  padding: 0.5rem ${({ theme }) => theme.toRem(24)};
  border-radius: ${(props) => (props.square ? "0" : "0.5rem")};
`;
export const LabelItem = (props) => {
  const { text } = props;
  return <StyledLabelItem {...props}>{text}</StyledLabelItem>;
};

const StyledCrewItem = styled.div`
  width: 100%;
  max-width: 360px;
  position: relative;
  dl {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: #f2f3f5;
    top: 0;
    left: 0;
    padding: 5rem 3rem;
    dt {
      font-weight: bold;
    }
    dd::before {
      content: "- ";
    }
  }
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;
export const CrewItem = ({ info }) => {
  return (
    <StyledCrewItem>
      <dl>
        <dt>{info.title}</dt>
        {info.details.map((d, index) => (
          <dd key={`detail-${index}`}>{d}</dd>
        ))}
      </dl>
    </StyledCrewItem>
  );
};

const StyledMarker = styled.em`
  position: relative;
  span {
    position: relative;
    z-index: 3;
  }
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 108%;
    /* height: 18px; */
    height: ${({ height }) => (height ? `${height}px` : "18px")};
    left: 50%;
    margin-left: -56%;
    bottom: 0;
    z-index: 1;
    transform: sKewX(-25deg);
    background-color: ${({ theme }) => theme.colors.markerColor};
  }
`;

// 형광펜 효과
export const Marker = ({ children, height }) => {
  return (
    <StyledMarker height={height}>
      <span>{children}</span>
    </StyledMarker>
  );
};

const StyledFloatingButtons = styled.div`
  position: fixed;
  right: 80px;
  bottom: 4rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media ${({ theme }) => theme.mobile} {
    right: ${({ theme }) => theme.toMRem(20)};
    bottom: ${({ theme }) => theme.toMRem(20)};
  }
`;
// Floating button
export const FloatingButtons = ({ topButton, onClickTop }) => {
  const location = useLocation();
  return (
    <StyledFloatingButtons>
      {topButton && <IconButton name="top" large onClick={onClickTop} />}
      {/* 문의하기 화면에서는 버튼 미노출 */}
      {location?.pathname !== "/inquiry" && <RequestButton />}
    </StyledFloatingButtons>
  );
};

const StyledRequestButton = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 100%;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  line-height: ${({ theme }) => theme.toRem(18)};
  width: ${({ theme }) => theme.toRem(100)};
  height: ${({ theme }) => theme.toRem(100)};
  a {
    color: #fff;
    display: block;
    width: 100%;
    height: 100%;
    ${({ theme }) => theme.common.flexCenter};
  }
`;
// 프로젝트 의뢰
export const RequestButton = () => {
  const { t } = useTranslation(["page"]);
  return (
    <StyledRequestButton>
      <NavLink to={"/inquiry"}>
        <span
          dangerouslySetInnerHTML={{ __html: t("page:common.footer.request") }}
        />
      </NavLink>
    </StyledRequestButton>
  );
};

const StyledMagicWand = styled.div`
  height: 1px;
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 800px;
  width: 100%;
  margin: 0 auto 0;
  z-index: 2;
  background-image: linear-gradient(
    to right,
    rgba(228, 17, 59, 0.8) 32%,
    #dadfe9 54% 80%
  );
  &::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -7px;
    z-index: 0;
    background-color: ${({ theme }) => theme.colors.borderColor};
  }

  @media ${({ theme }) => theme.desktop} {
    right: 1rem;
  }
  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
`;

export const MagicWand = () => {
  return <StyledMagicWand />;
};

const StyledObjectContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  min-height: 536px;
  position: absolute;

  @media ${({ theme }) => theme.tablet} {
    transform: translateX(-30%);
  }
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    transform: none;
    overflow: hidden;
  }
`;

export const ObjectContainer = (props) => {
  const { children } = props;
  return <StyledObjectContainer>{children}</StyledObjectContainer>;
};

const StyledTitleObject = styled.div`
  &.title-obj-a {
    width: 38vw;
    height: 28vw;
    z-index: 1;
    position: relative;
  }
  &.title-obj-b {
    width: 29vw;
    height: 21vw;
    z-index: 2;
    position: absolute;

    right: -4.16vw;
    bottom: -2vw;
    span {
      color: #fff;
      font-weight: 800;
      font-size: ${({ theme }) => theme.toRem(32)};
      min-width: 120px;
      position: absolute;
      left: 50%;
      top: 4px;
      transform: translateX(-140%);
    }
  }

  @media ${({ theme }) => theme.mobile} {
    &.title-obj-a {
      width: 540px;
      height: 396px;
    }
    &.title-obj-b {
      width: 413px;
      height: 302px;
      right: -60px;
      bottom: -30px;
      span {
        display: none;
      }
    }
  }
`;

export const TitleObject = (props) => {
  const { name, title, children } = props;
  return (
    <StyledTitleObject className={classNames("title-obj", name)}>
      {title && <span>{title}</span>}
      {children}
    </StyledTitleObject>
  );
};
