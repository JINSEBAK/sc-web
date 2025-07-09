import { useTranslation } from "react-i18next";
import { FormSection, CapsuleCheckboxList } from "../InquiryViewElement";
import { CapsuleCheckbox } from "component/common/Forms";
import { useEffect } from "react";
import { COMMON_CODE } from "lib/common";
import { useState } from "react";
import { useContext } from "react";
import { CodeContext } from "store/CodeStore";

const ProjectCategory = ({ onChangeCheckbox, selected }) => {
  //
  const CODES = useContext(CodeContext);
  const [codeList, setCodeList] = useState([]);
  const { t } = useTranslation(["page"]);

  useEffect(() => {
    // INQ: 200
    const tmp = CODES.filter((code) => {
      return code.commcdParentId === COMMON_CODE.INQ;
    });
    setCodeList(tmp);
  }, [CODES]);

  return (
    <FormSection title={t(`page:inquiryForm.part1.title`)} required multiple>
      <CapsuleCheckboxList>
        {codeList.map((code, index) => (
          <CapsuleCheckbox
            label={t(`page:inquiryForm.part1.label`, {
              context: `${index + 1}`,
            })}
            key={`check-${index}`}
            value={code.commcdId}
            name={"inqCd"}
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

export default ProjectCategory;
