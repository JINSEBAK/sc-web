import styled from "styled-components";
import { Button } from "component/admin/common/Items";
import classNames from "classnames";

const LoginContainer = (props) => {
  const { title, info, onClear, onChangeInput, onClickLogin, onKeyPress } =
    props;
  return (
    <StyledLogin>
      {title && <h1 dangerouslySetInnerHTML={{ __html: title }} />}
      <div className="content">
        <div
          className={classNames("item", info.adminId?.length > 0 && "checked")}
        >
          <input
            type="text"
            name="adminId"
            value={info.adminId}
            onChange={(e) => onChangeInput(e)}
          />
          <label htmlFor="">아이디</label>
          {info.adminId?.length > 0 && (
            <i
              className="icon icon-delete"
              onClick={() => onClear("adminId")}
            />
          )}
        </div>
        <div
          className={classNames("item", info.adminPw?.length > 0 && "checked")}
        >
          <input
            type="password"
            name="adminPw"
            value={info.adminPw}
            onChange={(e) => onChangeInput(e)}
            onKeyPress={(e) => onKeyPress(e)}
          />
          <label htmlFor="">비밀번호</label>
          {info.adminPw?.length > 0 && (
            <i
              className="icon icon-delete"
              onClick={() => onClear("adminPw")}
            />
          )}
        </div>
        <Button
          name="로그인"
          primary
          disabled={!(info.adminId?.length > 0 && info.adminPw?.length > 0)}
          onClick={onClickLogin}
        />
      </div>
      <p className="copyright">
        Copyright &copy; 2012 (주)스마트코어, All rights reserved.
      </p>
    </StyledLogin>
  );
};

export default LoginContainer;

const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: left;
    width: 100%;
    max-width: 320px;
    em {
      color: ${({ theme }) => theme.colors.adminMainColor};
    }
  }
  .content {
    border-radius: 0.25rem;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    .item {
      position: relative;
      label {
        position: absolute;
        background-color: #fff;
        left: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.5s top;
        font-size: 0.875rem;
        color: #262626;
      }
      input {
        border: 1px solid ${({ theme }) => theme.colors.borderColor};
        border-radius: 0.25rem;
        padding: 0.875rem 0 0.875rem 6rem;
        font-size: 1rem;
        width: 100%;
        &:focus {
          border: 1px solid ${({ theme }) => theme.colors.adminMainColor};
          padding: 0.875rem;
          & + label {
            top: 0;
            color: ${({ theme }) => theme.colors.adminMainColor};
          }
        }
      }
      i {
        cursor: pointer;
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        background-size: 100%;
      }
      &.checked {
        label {
          top: 0;
          color: ${({ theme }) => theme.colors.adminMainColor};
        }
        input {
          padding: 0.875rem;
        }
      }
    }
    button {
      margin: 2rem 0 1rem;
    }
  }
  .copyright {
    font-size: 0.875rem;
    opacity: 0.7;
  }
`;
