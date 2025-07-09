import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import classNames from "classnames";
import { AdminNavigation } from "../datas/constant";

const Navigation = () => {
  const location = useLocation();
  return (
    <StyledNavigation id="nav">
      <ul className="gnb">
        {AdminNavigation.map((nav, index) => (
          <li
            key={`admin-nav-${index}`}
            className={classNames(
              location.pathname.indexOf(nav.key) > -1 && "active"
            )}
          >
            <Link to={nav.path}>
              {nav.icon && <span>icon</span>}
              <span>{nav.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 60px;
  width: 220px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: #f2f3f6;
  transition: 0.3s all;
  @media ${({ theme }) => theme.tablet} {
    width: 80px;
  }
  ul.gnb {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    > li {
      transition: 0.3s all;
      display: flex;
      align-items: center;
      a {
        display: block;
        color: #666;
        font-size: 0.875rem;
        padding: 0.2rem 1rem;
        line-height: 1rem;
      }
      &::before {
        content: "";
        display: block;
        width: 4px;
        height: 100%;
        min-height: 30px;
        background-color: transparent;
        transition: 0.5s all;
      }
      &:hover,
      &.active {
        a {
          color: ${({ theme }) => theme.colors.adminMainColor};
        }
        &:: before {
          background-color: ${({ theme }) => theme.colors.adminMainColor};
        }
      }
    }
  }
`;
