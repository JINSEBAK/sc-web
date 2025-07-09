import styled from "styled-components";
import classNames from "classnames";

const Tabs = (props) => {
  const { menu, activeTab, onChangeTab, rounded } = props;
  return (
    <StyledTabs rounded={rounded}>
      {menu.length > 0 && (
        <ul>
          {menu.map((m) => {
            return (
              <li key={`menu-${m.key}`}>
                <div
                  className={classNames(m.key === activeTab && "on")}
                  onClick={() => onChangeTab(m.value)}
                >
                  {m.title}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </StyledTabs>
  );
};

export default Tabs;

const StyledTabs = styled.div`
  overflow-x: auto;
  position: relative;
  z-index: 2;
  ul {
    width: 100%;
    gap: ${({ theme }) => theme.toRem(10)};
    ${({ theme }) => theme.common.flexCenter}
  }
  li {
    // margin: ${(props) => (props.rounded ? "0 0 0 10px" : "0 -1px 0 0")};
    flex: 0 0 140px;
  }
  div {
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    background-color: #fff;
    padding: 1rem;
    min-width: 140px;
    text-align: center;
    cursor: pointer;
    font-weight: 700;
    border-radius: ${(props) => (props.rounded ? "3rem" : "0")};
    &.on {
      border: 1px solid #2b2b2f;
      background-color: #2b2b2f;
      color: #fff;
    },
  }

  @media ${({ theme }) => theme.mobile} { 
    width: 100%;
  
    li {
      flex: 0 1 100px;
    }
    div {
      width: 100%;
      padding: ${({ theme }) => theme.toMRem(12)};
    }
  }
  @media ${({ theme }) => theme.min} { 
    ul {
      gap: ${({ theme }) => theme.toMRem(6)};
      justify-content: flex-start;
      padding: 0 1rem;
    }
    div {
      min-width: 100px;
    }
  }
`;
