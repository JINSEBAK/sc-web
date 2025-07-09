import styled, { css } from "styled-components";
import classNames from "classnames";
import Icon from "./Icon";
import { PROJECT_TERMS, PROJECT_COST } from "datas/constant";

// datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledTextInput = styled.div`
  padding: 0 10px;
  width: 100%;
  height: 48px;
  margin-bottom: 1rem;
  transition: 0.3s all;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  input {
    border: none;
    height: 100%;
    padding: 0 0.5rem;
    background: transparent;
    flex: 1;
    font-size: 1rem;
    &::placeholder {
      color: #83838f;
    }
  }
  > span.error {
    color: ${({ theme }) => theme.colors.pointColor};
    font-size: 0.9rem;
    flex-basis: 100%;
    margin-top: 1rem;
  }
  label {
    display: flex;
    align-items: center;

    &::after {
      ${(props) => {
        if (props.required) {
          return css`
            content: "*";
            color: ${({ theme }) => theme.colors.warningColor};
            font-size: ${({ theme }) => theme.toRem(32)};
            font-weight: 800;
            display: inline-block;
            margin: 0px 4px -10px 4px;
          `;
        }
      }}
    }
    span {
      line-height: ${({ theme }) => theme.toRem(24)};
    }
  }
`;
export const TextInput = (props) => {
  const {
    type,
    label,
    name,
    value,
    placeholder,
    onChangeInput,
    style,
    readOnly,
    errorMessage,
    maxLength,
    required,
  } = props;
  return (
    <>
      <StyledTextInput required={required}>
        <label htmlFor="">
          <span>{label}</span>
        </label>
        <input
          type={type || "text"}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChangeInput(e)}
          style={style && style}
          readOnly={readOnly ?? false}
          maxLength={maxLength && maxLength}
        />
        {errorMessage && <span className="error">{errorMessage}</span>}
      </StyledTextInput>
    </>
  );
};

const StyledTextarea = styled.textarea`
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  resize: none;
  width: 100%;
  padding: 26px 20px;
  overflow-y: scroll;
  transition: 0.3s all;
  background-color: #f1f4fb;
  border-radius: 10px;
  font-family: inherit;
  font-size: 1rem;
  &::placeholder {
    font-weight: inherit;
    color: #83838f;
  }
`;
export const Textarea = ({
  placeholder,
  maxLength,
  onChangeText,
  name,
  rows,
  value,
  style,
}) => {
  return (
    <StyledTextarea
      placeholder={placeholder}
      maxLength={maxLength && maxLength}
      onChange={(e) => onChangeText(e)}
      rows={rows && rows}
      name={name && name}
      value={value && value}
      style={style && style}
    />
  );
};

const StyledCheckbox = styled.label`
  display: inline-block;
  margin-right: 0.5rem;
  position: relative;
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }
  &::after {
    content: "*";
    color: hotpink;
    display: ${(props) => (props.required ? "inline" : "none")};
  }
`;
export const Checkbox = ({
  label,
  name,
  value,
  onChangeCheckbox,
  required,
  style,
  checked = false,
}) => {
  return (
    <StyledCheckbox
      required={required || false}
      style={style && style}
      className="checkbox"
    >
      <input
        type="checkbox"
        name={name ?? ""}
        value={value ?? ""}
        onChange={(e) => onChangeCheckbox(e)}
        checked={checked}
      />
      <span dangerouslySetInnerHTML={{ __html: label }} />
    </StyledCheckbox>
  );
};

// 캡슐 형태의 체크 박스
const StyledCapsuleCheckbox = styled.label`
  display: inline-block;
  position: relative;
  padding: 12px 0;
  width: 150px;
  text-align: center;
  border-radius: 3rem;
  cursor: pointer;
  line-height: ${({ theme }) => theme.toRem(24)};
  color: ${({ theme }) => theme.colors.darkGrayColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  ${(props) => {
    if (props.checked) {
      return css`
        background-color: #2b2b2f;
        border: 1px solid #2b2b2f;
        color: #fff;
      `;
    }
  }}
  input {
    position: absolute;
    opacity: 0;
  }
  &::after {
    content: "*";
    color: ${({ theme }) => theme.colors.pointColor};
    display: ${(props) => (props.required ? "inline" : "none")};
  }
`;
export const CapsuleCheckbox = ({
  label,
  name,
  value,
  onChangeCheckbox,
  checked,
  required,
  style,
}) => {
  return (
    <StyledCapsuleCheckbox
      checked={checked || false}
      required={required || false}
      style={style && style}
      className={classNames(checked && "on")}
    >
      <input
        type="checkbox"
        name={name ?? ""}
        value={value ?? ""}
        checked={checked}
        onChange={(e) => onChangeCheckbox(e)}
      />
      <span>{label}</span>
    </StyledCapsuleCheckbox>
  );
};

const StyledFileInput = styled.div`
  display: flex;
  position: relative;
  height: 48px;
  margin-bottom: 1rem;
  input[type="file"] {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
  }
  > label {
    position: absolute;
    cursor: pointer;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
  button {
    background: #ccc;
    border: none;
    width: 16px;
    height: 16px;
    position: absolute;
    border-radius: 100%;
    top: 50%;
    transform: translateY(-50%);
    right: calc(25px + 2rem);
    padding: 0;
    overflow: hidden;
    cursor: pointer;
    i {
      background-position: center;
    }
  }
`;
export const FileInput = (props) => {
  const { label, onChangeFile, fileName, onClickDelete } = props;
  return (
    <StyledFileInput>
      <TextInput readOnly label={label} value={fileName ?? ""} />
      {fileName?.length > 0 && (
        <button onClick={onClickDelete}>
          <Icon name="delete" />
        </button>
      )}
      <label htmlFor="fileInput">
        <Icon name="attach" size={25} />
      </label>
      {/* 화면에서 보이지 않지만, 실제 파일 첨부 동작 요소 */}
      <input
        type="file"
        id="fileInput"
        onChange={(e) => onChangeFile(e)}
        //accept=".hwp, .pdf .zip"
      />
    </StyledFileInput>
  );
};

const StyledGuideText = styled.span`
  color: ${(props) => props.theme.colors.warningColor};
  margin-top: 1rem;
  display: block;
  font-size: 0.9rem;
`;
export const GuideText = ({ text }) => {
  return <StyledGuideText>{text}</StyledGuideText>;
};

const StyledDropdown = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin-bottom: 1rem;
  padding: 0 10px;
  label {
    display: flex;
    align-items: center;
    &::after {
      ${(props) => {
        if (props.required) {
          return css`
            content: "*";
            color: ${({ theme }) => theme.colors.warningColor};
            font-size: ${({ theme }) => theme.toRem(32)};
            font-weight: 800;
            display: inline-block;
            margin: 0px 4px -10px 4px;
          `;
        }
      }}
    }
    span {
      line-height: ${({ theme }) => theme.toRem(24)};
    }
  }
  select {
    flex: 1;
    border: none;
    height: 100%;
    font-size: 1rem;
    padding: 0 0.5rem;
    line-height: ${({ theme }) => theme.toRem(24)};
  }
  @media ${({ theme }) => theme.mobile} {
  }
`;

export const Dropdown = (props) => {
  const {
    label,
    name,
    value,
    options,
    defaultValue,
    onChangeDropdown,
    required,
  } = props;

  const values = name === "inqPeriod" ? PROJECT_TERMS : PROJECT_COST;

  return (
    <StyledDropdown required={required}>
      <label htmlFor="">
        <span>{label}</span>
      </label>
      <select
        onChange={(e) => onChangeDropdown(e)}
        name={name && name}
        defaultValue={defaultValue && defaultValue}
        value={value ?? defaultValue}
      >
        {options.map((opt, index) => (
          <option key={`option-${index}`} value={values[index].value}>
            {opt}
          </option>
        ))}
      </select>
    </StyledDropdown>
  );
};

const StyledDatePicker = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin-bottom: 1rem;
  padding: 0 10px;
  label {
    display: flex;
    align-items: center;
    &::after {
      ${(props) => {
        if (props.required) {
          return css`
            content: "*";
            color: ${({ theme }) => theme.colors.warningColor};
            font-size: ${({ theme }) => theme.toRem(32)};
            font-weight: 800;
            display: inline-block;
            margin: 0px 4px -10px 4px;
          `;
        }
      }}
    }
    span {
      line-height: ${({ theme }) => theme.toRem(24)};
    }
  }
  div.picker {
    flex: 1;
    height: 100%;
    position: relative;
    > div,
    > div > div {
      width: 100%;
      height: 100%;
      position: relative;
    }
    input {
      width: 100%;
      height: 100%;
      padding: 0 0.5rem;
      background: transparent;
      font-size: 1rem;
      border: none;
    }
    span {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      z-index: 5;
    }
  }
`;
export const SelectDatepicker = (props) => {
  const { label, name, required, onChangeDate, selectedDate, minDate } = props;
  return (
    <StyledDatePicker required={required}>
      <label htmlFor="">
        <span>{label}</span>
      </label>
      <div className="picker">
        <DatePicker
          dateFormat="yyyy-MM-dd"
          name={name}
          selected={selectedDate}
          onSelect={(date) => onChangeDate(name, date)}
          minDate={minDate}
        />
        <Icon name="calendar" size={24} />
      </div>
    </StyledDatePicker>
  );
};
