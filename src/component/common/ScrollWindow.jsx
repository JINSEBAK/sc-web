import styled from "styled-components";
import PageSection from "component/layout/PageSection";
import classNames from "classnames";

const StyledScrollWindow = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  background-color: transparent;
  height: ${(props) => (props.height ? `${props.height}px` : "400px")};
  transition: 0.3s height;
  @media ${({ theme }) => theme.tablet} {
    height: 314px;
  }
  @media ${({ theme }) => theme.mobile} {
    height: 296px;
  }
`;

const ScrollWindow = (props) => {
  const { contents } = props;
  return (
    <PageSection stretch>
      <StyledScrollWindow className="window" {...props}>
        {contents && contents}
      </StyledScrollWindow>
    </PageSection>
  );
};

export default ScrollWindow;
