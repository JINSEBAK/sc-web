import styled from "styled-components";
import classNames from "classnames";

const DetailInfoSection = (props) => {
  const { title, className, children } = props;
  return (
    <StyledDetailInfo className={classNames(className)}>
      {title && <h2>{title}</h2>}
      <table>
        <tbody>{children}</tbody>
      </table>
    </StyledDetailInfo>
  );
};

export default DetailInfoSection;

const StyledDetailInfo = styled.section`
  margin-bottom: 1rem;
  h2 {
    font-weight: 700;
    padding: 0.875rem 0;
  }
  table {
    width: 100%;
    font-size: 0.875rem;
    th,
    td {
      padding: 0.875rem;
      border: 1px solid ${({ theme }) => theme.colors.borderColor};
    }
    th {
      width: 16%;
      background-color: #f2f3f6;
      vertical-align: middle;
      line-height: normal;
      &.req {
        &::after {
          content: "*";
          color: ${({ theme }) => theme.colors.pointColor};
        }
      }
    }
    td {
      width: 34%;
      line-height: normal;
      vertical-align: top;
      img:not(.thumbnail) {
        cursor: pointer;
        max-height: 300px;
        vertical-align: top;
      }
      img.thumbnail {
        max-width: 400px;
      }
      input {
        width: 100%;
      }
      .download {
        color: ${({ theme }) => theme.colors.adminMainColor};
        text-decoration: underline;
        cursor: pointer;
        border: none;
        padding: 0;
        background-color: transparent;
        font-size: 0.875rem;
        min-width: 0;
      }
      &.pw {
        position: relative;
        .icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          width: 1.25rem;
          height: 1.25rem;
          i {
            background-size: 100%;
          }
        }
      }
    }
  }
  .scroll {
    min-height: 80px;
    max-height: 120px;
    overflow-y: auto;
    line-height: 1.5;
  }
  &.register {
    table {
      td {
        padding: 0.5rem;
        div {
          margin-top: 0 !important;
        }
        img {
          width: 100%;
          cursor: default;
          &.sub-img {
            width: auto;
            max-height: 200px;
          }
        }
      }
    }
  }
`;
