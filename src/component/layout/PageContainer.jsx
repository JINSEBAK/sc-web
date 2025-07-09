import styled from "styled-components";
import classNames from "classnames";

const StyledPageContainer = styled.div``;

/**
 * 페이지 단위 컨테이너
 * @param {*} props
 */
const PageContainer = (props) => {
  const { className, children } = props;
  return (
    <StyledPageContainer
      className={classNames(className && className)}
      {...props}
    >
      {children}
    </StyledPageContainer>
  );
};

export default PageContainer;
