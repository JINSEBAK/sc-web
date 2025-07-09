import styled from "styled-components";

const MobileNavi = styled.nav`
  position: fixed;
  right: 0;
  height: 100vh;
  width: 200px;
  padding-top: 8rem;
  background-color: aliceblue;
  transform: translateX(${(props) => (props.show ? `0` : `500px`)});
  transition: 0.5s;
  z-index: 50;

  .mobile_nave_list {
    display: flex;
    font-size: 2rem;
    justify-content: center;
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
  }

  @media ${(props) => props.theme.desktop} {
    transform: translateX(500px);
  }
  @media ${(props) => props.theme.tablet} {
    transform: translateX(500px);
  }
  @media ${(props) => props.theme.mobile} {
    transform: translateX(${(props) => (props.show ? `0` : `500px`)});
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  display: ${({ show }) => (show ? `block` : "none")};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
`;

const MobileNav = ({ showSlide, setShowSlide }) => {
  const onClickOverlay = () => {
    setShowSlide(false);
  };
  return (
    <>
      <MobileOverlay show={showSlide} onClick={onClickOverlay} />
      <MobileNavi id="mobile_nav" show={showSlide}>
        <ul className="mobile_nave_list">
          <li>
            <a href="#">Company</a>
          </li>
        </ul>
      </MobileNavi>
    </>
  );
};
export default MobileNav;
