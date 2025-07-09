import styled from "styled-components";

import { Button } from "./Items";

const SearchGroup = (props) => {
  const { inline, children, onClickSearch } = props;
  return (
    <StyledSearchGroup className="search" inline={inline}>
      {children}
      <Button name="검색" onClick={onClickSearch} search />
    </StyledSearchGroup>
  );
};

export default SearchGroup;

const StyledSearchGroup = styled.div`
  background-color: #f8f8f8;
  border-radius: 0.25rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12);
`;
