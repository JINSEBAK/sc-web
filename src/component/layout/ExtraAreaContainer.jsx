import styled from "styled-components";

const StyledExtraArea = styled.div`
  padding: 80px 40px;
  @media ${({ theme }) => theme.tablet} {
    padding: 80px 60px;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 80px 20px;
  }
`;

const ExtraAreaContainer = ({ children }) => {
  return <StyledExtraArea>{children}</StyledExtraArea>;
};

export default ExtraAreaContainer;
