import { FormSection } from "../InquiryViewElement";
import { TextInput } from "component/common/Forms";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ProjectChargeForm = ({ onChangeInput, data, message }) => {
  const { t } = useTranslation(["page"]);

  return (
    <FormSection title={t(`page:inquiryForm.part4.title`)} required>
      <StyledProjectChargeForm>
        <TextInput
          label={t(`page:inquiryForm.part4.label`, { context: "1" })}
          name={"cmpNm"}
          value={data["cmpNm"] ?? ""}
          onChangeInput={(e) => onChangeInput(e)}
        />
        <TextInput
          label={t(`page:inquiryForm.part4.label`, { context: "2" })}
          name={"cmpWriter"}
          value={data["cmpWriter"] ?? ""}
          onChangeInput={(e) => onChangeInput(e)}
        />
        <TextInput
          label={t(`page:inquiryForm.part4.label`, { context: "3" })}
          type={"tel"}
          name={"cmpTel"}
          value={data["cmpTel"] ?? ""}
          onChangeInput={(e) => onChangeInput(e)}
          maxLength={11}
          errorMessage={message["cmpTel"]}
        />
        <TextInput
          label={t(`page:inquiryForm.part4.label`, { context: "4" })}
          type={"email"}
          name={"cmpEmail"}
          value={data["cmpEmail"] ?? ""}
          onChangeInput={(e) => onChangeInput(e)}
          errorMessage={message["cmpEmail"]}
        />
      </StyledProjectChargeForm>
    </FormSection>
  );
};

export default ProjectChargeForm;

const StyledProjectChargeForm = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > div {
    width: 48%;
    border-bottom: 1px solid #83838f;
  }

  @media ${({ theme }) => theme.mobile} {
    > div {
      flex: 1 1 100%;
    }
  }
`;
