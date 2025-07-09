import { useTranslation } from "react-i18next";
import { FormSection, CapsuleCheckboxList } from "../InquiryViewElement";
import { CapsuleCheckbox } from "component/common/Forms";
import { useState } from "react";
import { useEffect } from "react";
import { COMMON_CODE } from "lib/common";
import { useContext } from "react";
import { CodeContext } from "store/CodeStore";

const ProjectField = ({ onChangeCheckbox, selected }) => {
  //
  const CODES = useContext(CodeContext);
  const { t } = useTranslation(["page"]);
  const [codeList, setCodeList] = useState([]);

  useEffect(() => {
    // DEVELOP: 300
    const tmp = CODES.filter((code) => {
      return code.commcdParentId === COMMON_CODE.DEVELOP;
    });
    setCodeList(tmp);
  }, [CODES]);

  return (
    <FormSection title={t(`page:inquiryForm.part2.title`)} required multiple>
      <CapsuleCheckboxList>
        {codeList.map((code, index) => (
          <CapsuleCheckbox
            label={t(`page:inquiryForm.part2.label`, {
              context: `${index + 1}`,
            })}
            key={`check-${index}`}
            value={code.commcdId}
            name="inqDevelopCd"
            checked={
              selected.filter((item) => item === code.commcdId).length > 0
            }
            onChangeCheckbox={(e) => onChangeCheckbox(e)}
          />
        ))}
      </CapsuleCheckboxList>
    </FormSection>
  );
};

export default ProjectField;
