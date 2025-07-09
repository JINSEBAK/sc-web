import styled from "styled-components";
import Tabs from "./Tabs";

const TabContainer = (props) => {
  const { isTab, menu, activeTab, onChangeTab } = props;
  return (
    <StyledTabContainer className="tab-container">
      {isTab && (
        <Tabs
          menu={menu}
          activeTab={activeTab}
          onChangeTab={onChangeTab}
          rounded
        />
      )}
    </StyledTabContainer>
  );
};

export default TabContainer;

const StyledTabContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  min-height: 50px;
  z-index: 5;
  @media ${({ theme }) => theme.mobile} {
    padding: 0;
  }
`;
