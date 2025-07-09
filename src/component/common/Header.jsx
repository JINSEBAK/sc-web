import { useEffect, useState } from "react";
import styled from "styled-components";
import { mediaSizes } from "../../assets/theme/theme";
import HamburgerBtn from "./Navigation/HamburgerBtn";
import MobileNav from "./Navigation/Mobile-Navigation";
import Navigation from "./Navigation/Navigation";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 3rem;
  position: fixed;
  width: 100%;
  height: 120px;
  line-height: 120px;
  padding: 0 20px;
  z-index: 2;
  .logo-img {
    cursor: pointer;
  }
  @media ${(props) => props.theme.desktop} {
    /* background-color: red; */
  }
  @media ${(props) => props.theme.tablet} {
    // background-color: green;
  }
  @media ${(props) => props.theme.mobile} {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

const Header = () => {
  const [showSlide, setShowSlide] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      const { innerWidth } = getWindowSize();
      if (innerWidth > +mediaSizes.mobile.split("px")[0]) {
        setShowSlide(false);
      }
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  return (
    <>
      <StyledHeader id="header">
        <Navigation />
      </StyledHeader>
      <HamburgerBtn showSlide={showSlide} setShowSlide={setShowSlide} />
      <MobileNav showSlide={showSlide} setShowSlide={setShowSlide} />
    </>
  );
};

export default Header;
