import styled from "styled-components";
import classNames from "classnames";

const StyledIcon = styled.span`
  display: inline-block;
  width: ${(props) => (props.size ? `${props.size}px` : `16px`)};
  height: ${(props) => (props.size ? `${props.size}px` : `16px`)};
  i {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
`;

const Icon = (props) => {
  const { name, size, onClickIcon } = props;
  return (
    <StyledIcon
      size={size}
      className="icon"
      onClick={onClickIcon && onClickIcon}
    >
      <i className={classNames(name && `icon-${name}`)} />
    </StyledIcon>
  );
};

export default Icon;
