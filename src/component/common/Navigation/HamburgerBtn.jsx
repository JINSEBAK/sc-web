import styled from "styled-components";

const Hamburger = styled.div`
  position: absolute;
  display: none;
  right: 0;
  width: 50px;
  height: 50px;
  top: 35px;
  z-index: 100;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  @media ${(props) => props.theme.mobile} {
    display: block;
  }
`;

const Line = styled.div`
  position: absolute;
  top: 20px;
  left: 5px;
  width: 40px;
  height: 6px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
  background: ${({ show }) => show && `transparent`};
  box-shadow: ${({ show }) => show && `none`};
  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 6px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }
  &::before {
    transform: translateY(-14px);
    transform: rotate(${({ show }) => show && `45deg`});
  }
  &::after {
    transform: translateY(14px);
    transform: rotate(${({ show }) => show && `-45deg`});
  }
`;

const HamburgerBtn = ({ showSlide, setShowSlide }) => {
  const onClickHamburgerBtn = () => {
    setShowSlide((prev) => !prev);
  };

  return (
    <Hamburger show={showSlide} onClick={onClickHamburgerBtn}>
      <Line show={showSlide} />
    </Hamburger>
  );
};

export default HamburgerBtn;
