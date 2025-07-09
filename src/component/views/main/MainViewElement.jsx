import styled from "styled-components";

const StyledHeadingItem = styled.dl`
  dt {
    font-weight: bold;
    font-size: ${({ theme }) => theme.toRem(80)};
    line-height: ${({ theme }) => theme.toRem(90)};
    margin-bottom: 2rem;
    @media ${({ theme }) => theme.tablet} {
      font-size: ${({ theme }) => theme.toRem(62)};
      line-height: ${({ theme }) => theme.toRem(62)};
    }
    @media ${({ theme }) => theme.mobile} {
      font-size: ${({ theme }) => theme.toMRem(52)};
      line-height: ${({ theme }) => theme.toMRem(52)};
    }
  }
  dd {
    font-size: ${({ theme }) => theme.toRem(28)};
    line-height: ${({ theme }) => theme.toRem(42)};
    @media ${({ theme }) => theme.tablet} {
      font-size: ${({ theme }) => theme.toRem(22)};
      line-height: ${({ theme }) => theme.toRem(34)};
    }
    @media ${({ theme }) => theme.mobile} {
      dd {
        font-size: ${({ theme }) => theme.toMRem(18)};
        line-height: ${({ theme }) => theme.toMRem(26)};
      }
    }
  }
`;

export const HeadingItem = (props) => {
  const { title, description } = props;
  return (
    <StyledHeadingItem>
      <dt>{title}</dt>
      <dd dangerouslySetInnerHTML={{ __html: description }} />
    </StyledHeadingItem>
  );
};
