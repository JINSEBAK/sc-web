import styled from "styled-components";

const Nav = styled.nav`
  .nav__list {
    display: flex;
    font-size: 2rem;
    padding-right: 30px;

    .nave__item {
      margin-right: 20px;
      cursor: pointer;
      a {
        cursor: pointer;
        text-decoration: none;
        color: black;
        &:hover {
          border-bottom: 3px solid violet;
        }
      }
    }
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const Navigation = () => {
  return (
    <>
      <h1 className="logo-img">LOGO</h1>
      <Nav id="nav">
        <ul className="nav__list">
          <li className="nave__item">
            <a href="">Company</a>
          </li>
          <li className="nave__item">
            <a href="">Tech</a>
          </li>
          <li className="nave__item">
            <a href="">Work</a>
          </li>
        </ul>
      </Nav>
    </>
  );
};
export default Navigation;
