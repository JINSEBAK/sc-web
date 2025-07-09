import styled from "styled-components";

const StyledButtonContainer = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: ${(props) => props.align || "center"};

  @media ${({ theme }) => theme.mobile} {
    display: flex;
    > button {
      flex: 1;
    }
  }
`;

const ButtonContainer = (props) => {
  return (
    <StyledButtonContainer {...props}>{props.children}</StyledButtonContainer>
  );
};

export default ButtonContainer;
