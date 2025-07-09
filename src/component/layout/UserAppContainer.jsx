import Footer from "../common/Footer";
import { useEffect, useState, useLayoutEffect } from "react";
import { useRef } from "react";
import MainHeader from "../common/MainHeader";
import BackgroundScreen from "../common/BackgroundScreen";
import { useLocation, Outlet } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { FloatingButtons } from "component/common/Items";

import GlobalNavigation from "component/common/Navigation/GlobalNavigation";

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

  const getLocationName = () => {
    if (location.pathname.indexOf("/") > -1) {
      return location.pathname.split("/")[1];
    } else {
      return location.pathname;
    }
  };

  const onClickTop = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <div ref={scrollRef}>
      <>
        <GlobalNavigation />
        <div className="">
          <Outlet context={{ setScrolled }} />
        </div>
        <Footer />
        {/* <MainHeader scrolled={scrolled} />
        <div id="container">
          <Outlet context={{ setScrolled }} />
        </div>
        {location.pathname !== "/main" && (
          <Footer topButton={topButton} onClickTop={onClickTop} />
        )}
        <FloatingButtons topButton={topButton} onClickTop={onClickTop} />
        <BackgroundScreen name={getLocationName()} /> */}
      </>
    </div>
  );
};

export default UserAppContainer;
