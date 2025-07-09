import { useState, Fragment } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { useEffect } from "react";
import { PAGE_SIZE } from "../datas/constant";

const CUT_BLOCK = 10; // 페이지 노출 단위

const Pagination = (props) => {
  //
  const { totalCount, currentPage, onClickPage } = props;

  const [pages, setPages] = useState([]); // 랜더링할 페이지 목록

  const totalPage = Math.ceil(totalCount / PAGE_SIZE);
  const maxCount = totalPage < CUT_BLOCK ? totalPage : CUT_BLOCK;
  let pageGroup = Math.ceil(currentPage / CUT_BLOCK - 1); // currentPage가 속한 page group

  useEffect(() => {
    let tempArr = [];
    for (let i = 0; i < maxCount; i++) {
      tempArr.push(i + 1);
    }
    setPages(tempArr);
  }, [totalCount]);

  const onClickPrev = () => {
    onClickPage(currentPage - 1);
  };

  const onClickNext = () => {
    onClickPage(currentPage + 1);
  };

  return (
    <>
      {totalCount > 0 && (
        <StyledPagination>
          <button onClick={() => onClickPage(1)} disabled={currentPage <= 1}>
            &lt;&lt;
          </button>
          <button onClick={onClickPrev} disabled={currentPage <= 1}>
            &lt;
          </button>
          <>
            {pages?.map((page, index) => {
              return (
                <Fragment key={`pagination-${index}`}>
                  {pageGroup * PAGE_SIZE + page <= totalPage && (
                    <span
                      className={classNames(
                        pageGroup * PAGE_SIZE + page === currentPage && "active"
                      )}
                      onClick={() => onClickPage(page)}
                    >
                      {pageGroup * PAGE_SIZE + page}
                    </span>
                  )}
                </Fragment>
              );
            })}
          </>
          <button onClick={onClickNext} disabled={currentPage === totalPage}>
            &gt;
          </button>
          <button
            onClick={() => onClickPage(totalPage)}
            disabled={currentPage === totalPage}
          >
            &gt;&gt;
          </button>
        </StyledPagination>
      )}
    </>
  );
};

export default Pagination;

const StyledPagination = styled.div`
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  font-size: 0.75rem;
  > * {
    cursor: pointer;
    line-height: 1rem;
    padding: 0.3rem 0.5rem;
    border-radius: 0.25rem;
    &:hover {
      background-color: #f2f3f6;
    }
  }
  button {
    border: none;
    background-color: transparent;
    opacity: 0.6;
  }
  span {
    &.active {
      font-weight: 800;
      color: ${({ theme }) => theme.colors.pointColor};
    }
    &:first-of-type {
      margin-left: 1rem;
    }
    &:last-of-type {
      margin-right: 1rem;
    }
  }
`;
