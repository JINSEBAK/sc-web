import { FormSection } from "../InquiryViewElement";
import {
  Textarea,
  FileInput,
  Dropdown,
  SelectDatepicker,
} from "component/common/Forms";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ProjectInfoForm = (props) => {
  const {
    onChangeInput,
    onChangeDropdown,
    onChangeFile,
    onChangeDate,
    fileName,
    selectedDate,
    onClickDelete,
    data,
  } = props;
  const { t } = useTranslation(["page"]);
  return (
    <FormSection
      title={t(`page:inquiryForm.part3.title`)}
      guide={t(`page:inquiryForm.part3.guide`)}
    >
      <StyledProjectInfoForm>
        {/* 프로젝트 기간 */}
        <Dropdown
          label={t(`page:inquiryForm.part3.label`, { context: "1" })}
          required
          name={"inqPeriod"}
          value={data["inqPeriod"]}
          options={t(`page:inquiryForm.part3.terms`, { returnObjects: true })}
          onChangeDropdown={(e) => onChangeDropdown(e)}
        />
        {/* 오픈 예정일 */}
        <SelectDatepicker
          label={t(`page:inquiryForm.part3.label`, { context: "2" })}
          required
          name={"inqScdDts"}
          selectedDate={selectedDate}
          onChangeDate={onChangeDate}
          minDate={new Date()}
        />

        {/* 프로젝트 예산 */}
        {/* <Dropdown
          label={t(`page:inquiryForm.part3.label`, { context: "3" })}
          required
          name={"inqBudget"}
          value={data["inqBudget"]}
          options={t(`page:inquiryForm.part3.cost`, { returnObjects: true })}
          onChangeDropdown={(e) => onChangeDropdown(e)}
        /> */}
        {/* 첨부파일 */}
        <FileInput
          label={t(`page:inquiryForm.part3.label`, { context: "4" })}
          name={"file"}
          fileName={fileName}
          onChangeFile={onChangeFile}
          onClickDelete={onClickDelete}
        />
      </StyledProjectInfoForm>
      {/* 프로젝트 내용 */}
      <Textarea
        placeholder={t(`page:inquiryForm.part3.label`, { context: "5" })}
        rows={7}
        name={"inqCntt"}
        value={data["inqCntt"]}
        onChangeText={(e) => onChangeInput(e)}
      />
    </FormSection>
  );
};

export default ProjectInfoForm;

const StyledProjectInfoForm = styled.div`
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
