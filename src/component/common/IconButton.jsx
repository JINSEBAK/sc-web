import styled, { css } from "styled-components";
import classNames from "classnames";

const IconButton = (props) => {
  const { name, text, style } = props;
  return (
    <StyledIconButton {...props} style={style}>
      <i className={classNames(name && `icon-${name}`)} />
      {text && <span>{text}</span>}
    </StyledIconButton>
  );
};

export default IconButton;

const StyledIconButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  i {
    display: block;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    ${(props) => {
      if (props.large) {
        return css`
          width: 74px;
          height: 74px;
        `;
      }
      if (props.middle) {
        return css`
          width: 28px;
          height: 28px;
        `;
      }
      if (props.small) {
        return css`
          width: 16px;
          height: 16px;
        `;
      }
      if (props.custom) {
        return css`
          ${props.style}
        `;
      }
    }}
  }
  ${({ theme }) => theme.common.flexVertical};
  span {
    margin-top: ${({ theme }) => theme.toRem(13)};
    color: #444;
  }
  @media ${({ theme }) => theme.tablet} {
    i {
      ${(props) => {
        if (props.large) {
          return css`
            width: 58px;
            height: 58px;
          `;
        }
      }}
    }
    span {
      font-size: 12px;
      margin-top: 4px;
    }
  }
`;
