import styled, { css, keyframes } from "styled-components";

// datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Icon from "component/common/Icon";
import { modalAlert } from "util/common";
const StyledButton = styled.button`
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  &:hover {
    opacity: 0.8;
  }
  ${(props) => {
    if (props.search) {
      return css`
        border: none;
        background-color: #292929;
        color: #fff;
        font-size: 0.875rem;
        padding: 0 1rem;
        height: 34px;
        margin-top: auto;
        border-radius: 0.25rem;
      `;
    }
    if (props.text) {
      return css`
        background-color: transparent;
        border: none;
        color: #292929;
        font-size: 0.875rem;
        padding: 0;
      `;
    }
    if (props.primary) {
      return css`
        background-color: ${({ theme }) => theme.colors.primaryColor};
        color: #fff;
        border: none;
        opacity: 1;
      `;
    }
  }}
  &:disabled {
    background-color: #999;
    color: #f3f3f3;
    cursor: default !important;
    &:hover {
      opacity: 1;
    }
  }
`;

export const Button = (props) => {
  const { name, onClick, search, text, primary, disabled, style } = props;
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      primary={primary}
      search={search}
      text={text}
      style={style && style}
    >
      {name}
    </StyledButton>
  );
};

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  > button {
    min-width: 120px;
    & + button {
      margin-left: 1rem;
    }
  }
  ${(props) => {
    if (props.away) {
      return css`
        justify-content: space-between;
      `;
    }
    if (props.right) {
      return css`
        justify-content: flex-end;
      `;
    }
  }}
`;
export const ButtonGroup = (props) => {
  const { children } = props;
  return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>;
};

const StyledTextBox = styled.textarea`
  resize: none;
  min-height: 120px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-family: inhreit;
  font-size: 0.875rem;
  overflow-y: auto;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.adminMainColor};
  }
`;

export const TextBox = (props) => {
  const { placeholder, name, value, maxLength, onChangeItem } = props;
  const onChangeText = (e) => {
    const value = e.target.value;
    if (value.length > maxLength) {
      modalAlert({
        title: "",
        message: "50자까지만 입력가능합니다.",
      });
    } else {
      onChangeItem(e);
    }
  };

  return (
    <StyledTextBox
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => onChangeText(e)}
    />
  );
};

const StyledFileAttachment = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
  }
  input {
    flex: 1;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    padding: 0.5rem;
    border-radius: 0.25rem 0 0 0.25rem;
  }
  label {
    border: 1px solid #464646;
    background-color: #464646;
    color: #fff;
    padding: 0.5rem 1rem;
    height: 33px;
    border-radius: 0 0.25rem 0.25rem 0;
    cursor: pointer;
  }
`;
export const FileAttachment = (props) => {
  const { id, name, fileName, onChangeFile, multiple } = props;
  return (
    <StyledFileAttachment>
      <input type="text" readOnly value={fileName ?? undefined} />
      <input
        type="file"
        id={id}
        name={name}
        multiple={multiple ? "multiple" : undefined}
        onChange={(e) => onChangeFile(e)}
      />
      <label htmlFor={id}>파일찾기</label>
    </StyledFileAttachment>
  );
};

const StyledFileGuide = styled.ul`
  font-size: 0.75rem;
  list-style: disc;
  line-height: 0.875rem;
  margin: 0.5rem 0 0.5rem 1rem;
  opacity: 0.8;
`;

export const FileAttachGuide = (props) => {
  const { text } = props;
  return (
    <>
      {text.length > 0 && (
        <StyledFileGuide>
          {text.map((t, index) => (
            <li key={`guide-${index}`}>{t}</li>
          ))}
        </StyledFileGuide>
      )}
    </>
  );
};

const StyledSingleDate = styled.div`
  position: relative;
  max-width: 50%;
  > div {
    width: 100%;
  }
  > span {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
  input {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
  }
`;

export const SingleDatepicker = (props) => {
  const { selected, onChangeDate } = props;
  return (
    <StyledSingleDate>
      <DatePicker
        selected={selected}
        dateFormat={"yyyy-MM-dd"}
        onSelect={(date) => onChangeDate(date)}
      />
      <Icon name="calendar" size={24} />
    </StyledSingleDate>
  );
};

const StyledSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: #fff;
  font-size: 0.875rem;
  padding: 0.5rem;
  min-width: 164px;
  border-radius: 0.25rem;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.adminMainColor};
  }
`;

export const SelectBox = (props) => {
  const { options, name, value, onChangeItem } = props;
  return (
    <StyledSelect name={name} value={value} onChange={(e) => onChangeItem(e)}>
      <option>선택</option>
      {options.map((opt, index) => (
        <option key={`option-${opt.commcdId}`} value={opt.commcdId}>
          {opt.commcdNm}
        </option>
      ))}
    </StyledSelect>
  );
};

const loading = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg)
}
`;

const StyledLoader = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 4px solid #e4103b;
    border-top-color: #eee;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    animation: ${loading} 1.2s linear infinite;
  }
`;

export const Loader = () => {
  return <StyledLoader />;
};

const StyledNoResult = styled.div`
  width: 100%;
  text-align: center;
  margin: ${({ theme }) => theme.toRem(100)} auto;
  font-size: 1.25rem;
  span::before {
    content: ":)";
    font-weight: 800;
    font-size: 3rem;
    line-height: 4.25rem;
    opacity: 0.5;
  }
  div {
    margin-top: 1rem;
  }
`;

export const NoResult = (props) => {
  const { text } = props;
  return (
    <StyledNoResult>
      <span></span>
      {text && <div>{text}</div>}
    </StyledNoResult>
  );
};
