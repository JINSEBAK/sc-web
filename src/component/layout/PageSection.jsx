import styled, { css } from "styled-components";
import classNames from "classnames";

const StyledSection = styled.section`
  position: relative;
  background-color: ${(props) => (props.stretch ? "transparent" : "#fff")};
  > * {
    max-width: ${(props) => (props.stretch ? "100%" : "1280px")};
    margin: 0 auto;
  }
`;

/**
 * 각각의 콘텐츠 영역을 감싸는 컴포넌트
 * 백그라운드 컬러와 바로 아래 자식 노드의 max-width값을 조정하여 해상도별 크기를 컨트롤한다.
 * 단, 가로 풀사이즈 컴포넌트(ex, 패럴렉스 스크롤을 위한 ScrollWindow 같은)는 stretch 라는 props가 필요하다.
 * @param {*} props
 */
const PageSection = (props) => {
  const { className, children } = props;
  return (
    <StyledSection {...props} className={classNames(className && className)}>
      {children}
    </StyledSection>
  );
};

export default PageSection;
