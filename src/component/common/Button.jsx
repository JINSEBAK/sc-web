import styled, { css } from "styled-components";
import classNames from "classnames";

const Button = (props) => {
  //
  const { text, onClickButton, disabled, primary, children, className } = props;
  return (
    <StyledButton
      onClick={onClickButton && onClickButton}
      disabled={disabled}
      primary={primary}
      className={classNames(className && className)}
    >
      {text && text}
      {children && children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.toRem(24)};
  border-radius: 3rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: #fff;
  cursor: pointer;
  min-width: 300px;

  ${(props) => {
    const bgColor = props.disabled
      ? "#555"
      : props.primary
      ? props.theme.colors.darkGrayColor
      : "#fff";

    const txtColor = props.primary ? "#fff" : "#000";
    return css`
      background-color: ${bgColor};
      color: ${txtColor};
      &:disabled {
        cursor: default;
        opacity: 1;
      }
    `;
  }}

  @media ${({ theme }) => theme.mobile} {
    font-size: ${({ theme }) => theme.toMRem(18)};
    line-height: ${({ theme }) => theme.toMRem(24)};
    min-width: 220px;
  }
`;
