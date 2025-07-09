import styled from "styled-components";

const NoSearchData = (props) => {
  const { message, colspan } = props;
  return (
    <StyledNoSearchData className="no-data">
      <td colSpan={colspan ?? 0}>{message ?? "정보가 없습니다."}</td>
    </StyledNoSearchData>
  );
};

export default NoSearchData;

const StyledNoSearchData = styled.tr`
  td {
    padding: 5rem 0 !important;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  }
  &.no-data {
    &:hover {
      background-color: transparent !important;
      cursor: default;
    }
  }
`;
