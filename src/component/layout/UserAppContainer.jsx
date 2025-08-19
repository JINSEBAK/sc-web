// components
import GlobalNavigation from "component/common/Navigation/GlobalNavigation";
import ImageItem from "component/common/atoms/ImageItem";
import Footer from "../common/Footer";

import { useEffect, useState, useLayoutEffect } from "react";
import { useRef } from "react";
import { useLocation, Outlet } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import classNames from "classnames";

const UserAppContainer = () => {
  //
  const [scrolled, setScrolled] = useState(false);
  const [topButton, setTopButton] = useState(false);

  const scrollRef = useRef(null);
  const location = useLocation();

  //
  useEffect(() => {
    // Animation on Scroll init
    AOS.init();
  }, []);

  useLayoutEffect(() => {
    // 최상단으로 이동
    onClickTop();

    // 스크롤 시 발생하는 이벤트 관련 state 초기화
    setScrolled(false);
    setTopButton(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!scrollRef.current) return;

    const pageHeight = window.innerHeight;

    const onScroll = () => {
      const scrollTop = scrollRef?.current.getBoundingClientRect().top;
      if (scrollTop < -100) {
        // header > logo, menu button sticky
        setScrolled(true);
        if (Math.abs(scrollTop) > pageHeight / 2) {
          setTopButton(true);
        } else {
          setTopButton(false);
        }
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  const onClickTop = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <div ref={scrollRef}>
      <>
        <button
          type="button"
          className={classNames("btn-top", { show: scrolled })}
          onClick={onClickTop}
        >
          <ImageItem imgFile="icon_top.svg" />
        </button>
        <GlobalNavigation isHidden={scrolled} />
        <div className="">
          <Outlet context={{ setScrolled }} />
        </div>
        <Footer isScrolled={scrolled} />
      </>
    </div>
  );
};

export default UserAppContainer;
