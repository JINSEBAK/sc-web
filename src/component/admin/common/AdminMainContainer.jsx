import styled from "styled-components";
import ContentTitle from "./ContentTitle";
import { Loader } from "./Items";

const MainContainer = (props) => {
  const { name, children, loader = false } = props;
  return (
    <StyledMainContainer>
      {loader && <Loader />}
      <ContentTitle name={name} />
      {children}
    </StyledMainContainer>
  );
};

export default MainContainer;

const StyledMainContainer = styled.main`
  margin: 60px 0 0 220px;
  padding: 2rem 1rem;
  position: relative;
  min-height: 825px;
  transition: 0.3s all;
  @media ${({ theme }) => theme.tablet} {
    margin: 60px 0 0 80px;
  }
`;
