import styled from "styled-components";
import Pagination from "./Pagination";
import { Loader } from "./Items";

/**
 * 게시판
 */
const ListContainer = (props) => {
  const { totalCount, currentPage, onClickPage, actionButton, children } =
    props;
  return (
    <StyledListContainer>
      <div className="list-hd">
        <div className="total">
          Total <em>{totalCount ?? 0}</em>
        </div>
        {actionButton && actionButton}
      </div>
      <div className="list-bd">
        <table>{children}</table>
      </div>
      <Pagination
        totalCount={totalCount}
        currentPage={currentPage}
        onClickPage={onClickPage}
      />
    </StyledListContainer>
  );
};

export default ListContainer;

const StyledListContainer = styled.div`
  margin: 2rem 0;
  .list-hd {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 0.5rem;
    .total {
      font-size: 0.75rem;
      em {
        font-weight: 800;
        color: ${({ theme }) => theme.colors.adminMainColor};
      }
    }
  }
  .list-bd {
    position: relative;
    table {
      width: 100%;
      thead {
        background-color: #7e7e7e;
        color: #fff;
      }
      tbody {
        tr {
          cursor: pointer;
          border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
          &:hover {
            background-color: #fff9ed;
          }
          td {
            text-align: center;
            &.left {
              text-align: left;
            }
            .download {
              color: ${({ theme }) => theme.colors.adminMainColor};
              text-decoration: underline;
            }
          }
        }
      }
      th,
      td {
        font-size: 0.875rem;
        padding: 0.875rem 0;
        vertical-align: middle;
      }
      th {
        span {
          cursor: pointer;
          opacity: 0.3;
          padding-left: 0.25rem;
          color: #ffb0b0;
          &.desc::after {
            content: "↓";
          }
          &.asc::after {
            content: "↑";
          }
          &.on {
            opacity: 1;
          }
        }
      }
      td {
        span.bar {
          &::before {
            content: "|";
            opacity: 0.2;
            padding: 0 0.25rem;
            font-size: 0.875rem;
          }
          &:first-of-type::before {
            content: none;
          }
        }
        em {
          color: ${({ theme }) => theme.colors.adminMainColor};
        }
      }
    }
  }
`;
