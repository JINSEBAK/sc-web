import { useTranslation } from "react-i18next";
import { Checkbox } from "../../common/Forms";

import styled, { css } from "styled-components";

const StyledFormSection = styled.div`
  margin-bottom: ${({ theme }) => theme.toRem(40)};
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    span.guide {
      padding-top: 4px;
      padding-left: 8px;
      font-weight: 400;
      color: #5c5c65;
      font-size: ${({ theme }) => theme.toRem(14)};
    }
  }
  h4 {
    font-weight: 800;
    font-size: 1.5rem;
    display: flex;
    &::after {
      ${(props) => {
        if (props.required) {
          return css`
            content: " *";
            display: inline-block;
            color: ${({ theme }) => theme.colors.warningColor};
            font-size: ${({ theme }) => theme.toRem(32)};
            margin: 0 0px -10px 8px;
          `;
        }
      }}
    }
  }
  @media ${({ theme }) => theme.mobile} {
    margin-bottom: ${({ theme }) => theme.toRem(40)};
    > div {
      margin-bottom: 10px;
      span.guide {
        font-size: ${({ theme }) => theme.toRem(12)};
        padding: 0 0 12px 12px;
        &.file {
          flex: 1 1 100%;
          padding: 4px 0;
          line-height: ${({ theme }) => theme.toRem(14)};
        }
      }
    }
    h4 {
      font-weight: 700;
      &::after {
        ${(props) => {
          if (props.required) {
            return css`
              margin: 2px -6px 0px 8px;
            `;
          }
        }}
      }
    }
  }
`;

export const FormSection = (props) => {
  const { title, guide, multiple, children, required } = props;
  const { t } = useTranslation(["page"]);
  return (
    <StyledFormSection required={required}>
      <div>
        <h4>{title}</h4>
        {multiple && (
          <span className="guide">{t(`page:inquiryForm.common.multiple`)}</span>
        )}
        {guide && <span className="guide file">{guide}</span>}
      </div>
      {children}
    </StyledFormSection>
  );
};

const StyledAgreement = styled.div`
  margin: -1rem auto 4rem;
  display: flex;
  align-items: center;
  span {
    em {
      color: ${({ theme }) => theme.colors.warningColor};
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const PrivacyPolicyAgreement = ({
  onChangeCheckbox,
  checked,
  onClickPrivacyPolicy,
}) => {
  const { t } = useTranslation(["page"]);
  return (
    <StyledAgreement>
      <Checkbox
        label={""}
        onChangeCheckbox={onChangeCheckbox}
        checked={checked}
      />
      <span
        dangerouslySetInnerHTML={{
          __html: t(`page:inquiryForm.part5.checkLabel`),
        }}
        onClick={onClickPrivacyPolicy}
      />
    </StyledAgreement>
  );
};

const StyledCapsuleCheckboxList = styled.div`
  display: grid;
  grid-gap: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(auto));
  @media ${({ theme }) => theme.mobile} {
    gap: 0.75rem;
  }
`;

export const CapsuleCheckboxList = ({ children }) => {
  return <StyledCapsuleCheckboxList>{children}</StyledCapsuleCheckboxList>;
};
