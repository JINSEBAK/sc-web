import styled from "styled-components";
import classNames from "classnames";
import { useEffect, useState } from "react";

import AboutVideo from "../../assets/video/sub01_bg01.mp4";

const StyledBackgroundScreen = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-coor: #fff;
`;

const BackgroundScreen = (props) => {
  const [scrollPosTop, setScrollPosTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.body.getBoundingClientRect().top;
      setScrollPosTop(Math.abs(scrollTop * 0.1));
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <StyledBackgroundScreen
      className={classNames("fixed-bg", props.name)}
      style={{ backgroundPosition: `center ${scrollPosTop}px` }}
      {...props}
    >
      {props.name === "about" && (
        <video muted autoPlay loop>
          <source src={AboutVideo} type="video/mp4"></source>
          <strong> Your browser does not support the video tag.</strong>
        </video>
      )}
    </StyledBackgroundScreen>
  );
};

export default BackgroundScreen;
