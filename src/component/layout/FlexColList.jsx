import styled, { css } from "styled-components";

const StyledFlexColList = styled.ul`
  // display: flex;
  // flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  gap: ${({ theme }) => theme.toRem(20)};
  li {
    ${(props) => {
      // 일단위 절사
      const percent = Math.floor(100 / props.cols / 10) * 10;
      return css`
        flex: 1 1 ${percent}%;
      `;
    }}
    transition: 0.3s all;
  }
  @media ${({ theme }) => theme.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(40%, auto));
  }
  @media ${({ theme }) => theme.min} {
    grid-template-columns: repeat(auto-fill, minmax(60%, auto));
  }
`;

// Cols 개수 지정하여 그리드생성
const FlexColList = (props) => {
  const { children } = props;
  return <StyledFlexColList {...props}>{children}</StyledFlexColList>;
};

export default FlexColList;
