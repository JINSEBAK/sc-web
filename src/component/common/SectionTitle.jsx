import styled, { css } from "styled-components";

const SectionTitle = (props) => {
  const { prevTitle, title, description, main } = props;
  return (
    <StyledSectionTitle main={main}>
      {prevTitle && <span dangerouslySetInnerHTML={{ __html: prevTitle }} />}
      <em dangerouslySetInnerHTML={{ __html: title }} />
      {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
    </StyledSectionTitle>
  );
};

export default SectionTitle;

const StyledSectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  p {
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: normal;
    line-height: 1.5;
    ${(props) => {
      // 메인 화면
      if (props.main) {
        return css`
          color: #fff;
          font-size: ${({ theme }) => theme.toRem(28)};
          line-height: ${({ theme }) => theme.toRem(42)};
        `;
      }
    }}
  }
  > span {
    display: inline-block;
    margin-bottom: ${({ theme }) => theme.toRem(26)};
    font-size: ${({ theme }) => theme.toRem(24)};
  }
  em {
    display: inline-block;
    position: relative;
    line-heigth: ${({ theme }) => theme.toRem(60)};
    ${(props) => {
      if (props.main) {
        return css`
          color: #fff;
          font-family: "BMDH";
          font-size: ${({ theme }) => theme.toRem(66)};
          line-height: ${({ theme }) => theme.toRem(80)};
          text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.5);
        `;
      } else {
        return css`
          display: block;
          font-size: ${({ theme }) => theme.toRem(52)};
          font-weight: 800;
        `;
      }
    }}
    span {
      display: block;
      color: #5a5a5a;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    > span {
      margin-bottom: 0.5rem;
    }
    em {
      ${(props) => {
        if (props.main) {
          return css`
            font-size: ${({ theme }) => theme.toMRem(42)};
            line-height: ${({ theme }) => theme.toMRem(54)};
          `;
        }
      }}
    }
    p {
      ${(props) => {
        if (props.main) {
          return css`
            font-size: ${({ theme }) => theme.toMRem(18)};
            line-height: ${({ theme }) => theme.toMRem(26)};
          `;
        }
      }}
      br {
        ${(props) => {
          if (props.main) {
            return css`
              display: none;
            `;
          }
        }}
    }

  }
`;
