import styled from "styled-components";
import classNames from "classnames";

// datepicker
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import Icon from "component/common/Icon";

const SearchItem = (props) => {
  const {
    type,
    label,
    name,
    value,
    placeholder,
    onChangeItem,
    startDt,
    endDt,
    options,
    onKeyDown,
  } = props;

  return (
    <StyledSearchItem>
      <label htmlFor="">{label && label}</label>
      <div className={classNames(type)}>
        {type === "date" && (
          <>
            <div className="dp">
              <DatePicker
                selected={startDt}
                dateFormat={"yyyy-MM-dd"}
                placeholder="시작일"
                name="searchStrDt"
                maxDate={endDt}
                locale={ko}
                onSelect={(date) => onChangeItem("searchStrDt", date)}
              />
              <Icon name="calendar" size={24} />
            </div>
            -
            <div className="dp">
              <DatePicker
                selected={endDt}
                dateFormat={"yyyy-MM-dd"}
                placeholder="종료일"
                name="searchEndDt"
                minDate={startDt}
                onSelect={(date) => onChangeItem("searchEndDt", date)}
              />
              <Icon name="calendar" size={24} />
            </div>
          </>
        )}
        {type === "text" && (
          <input
            type="text"
            placeholder={placeholder}
            name={name}
            value={value ?? ""}
            onChange={(e) => onChangeItem(e)}
            onKeyDown={(e) => onKeyDown && onKeyDown(e)}
          />
        )}
        {type === "password" && (
          <div className="pw">
            <input
              type={"password"}
              placeholder={placeholder}
              name={name}
              value={value ?? ""}
              onChange={(e) => onChangeItem(e)}
              onKeyDown={(e) => onKeyDown && onKeyDown(e)}
            />
          </div>
        )}
        {type === "select" && (
          <select name={name} onChange={(e) => onChangeItem(e)}>
            <option value={0}>전체</option>
            {options.length > 0 && (
              <>
                {options.map((option, index) => (
                  <option key={`opt-${index}`} value={option.commcdId}>
                    {option.commcdNm}
                  </option>
                ))}
              </>
            )}
          </select>
        )}
      </div>
    </StyledSearchItem>
  );
};

export default SearchItem;

const StyledSearchItem = styled.div`
  > div {
    margin-top: 0.25rem;
  }
  label {
    font-size: 0.75rem;
  }
  input,
  select {
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    background-color: #fff;
    font-size: 0.875rem;
    padding: 0.5rem;
    min-width: 164px;
    border-radius: 0.25rem;
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.adminMainColor};
    }
  }
  select {
    background-size: 10px;
  }
  .date {
    display: flex;
    align-items: center;
    .dp {
      position: relative;
      span.icon {
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .text {
    input {
      min-width: 240px;
    }
  }
`;
