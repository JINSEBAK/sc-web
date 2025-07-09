import styled from "styled-components";
import { Logo, Gnb, MenuButton, FullScreenGnb } from "./Items";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SwitchLanguage } from "./Navigation/SwitchLanguage";

const MainHeader = ({ scrolled }) => {
  //
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const onClickMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  return (
    <StyledMainHeader>
      <Logo />
      {!scrolled && (
        <StyledResponsiveMenu>
          <Gnb />
          <SwitchLanguage open={open} />
        </StyledResponsiveMenu>
      )}
      <MenuButton open={open} onClickMenu={onClickMenu} />
      {open && <FullScreenGnb />}
    </StyledMainHeader>
  );
};

export default MainHeader;

const StyledMainHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.56rem 4.16vw;
  height: 100px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;

  @media ${({ theme }) => theme.tablet} {
    height: auto;
    padding: 1rem;
  }
  @media ${({ theme }) => theme.mobile} {
    height: auto;
    padding: 0;
  }
`;

const StyledResponsiveMenu = styled.div`
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.tablet} {
    display: none;
  }
`;
