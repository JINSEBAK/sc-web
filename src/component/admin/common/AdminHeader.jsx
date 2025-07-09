import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// logo
import Logo from "assets/images/logo.svg";
import { Button } from "./Items";
import { postLogoutAdmin } from "lib/adminApi";
import { RESULT } from "lib/common";
import { modalAlert } from "util/common";

const Header = () => {
  //
  const navigate = useNavigate();
  const adminId = sessionStorage.getItem("nick");

  // logout
  const onClickButton = () => {
    postLogoutAdmin().then((data) => {
      if (data.resultCode === RESULT.SUCCESS) {
        sessionStorage.removeItem("nick");
        setTimeout(() => {
          navigate("/admin");
        }, 500);
      } else {
        modalAlert({
          title: "",
          message: "잠시 후 다시 시도해주세요.",
        });
      }
    });
  };

  return (
    <StyledHeader id="header">
      <Link to="/admin/works">
        <img src={Logo} alt="주식회사 스마트코어 로고 이미지" />
      </Link>
      <ul>
        <li>
          <span>{adminId ?? "admin"}</span>
        </li>
        <li>
          <Button
            name={adminId ? "로그아웃" : "로그인"}
            text
            onClick={onClickButton}
          />
        </li>
      </ul>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #fff;
  color: #292929;
  width: 100%;
  height: 60px;
  position: fixed;
  font-size: 0.875rem;
  top: 0;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  > a {
    height: 100%;
    flex: 0 0 220px;
    display: flex;
    img {
      margin-left: 1.3rem;
      max-width: 140px;
    }
  }
  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
  }
`;
