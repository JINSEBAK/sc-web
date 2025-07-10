import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageContainer from "../../layout/PageContainer";
import PageTitle from "../../common/PageTitle";
import { PrivacyPolicyAgreement } from "./InquiryViewElement";
import Button from "../../common/Button";
import ButtonContainer from "../../layout/ButtonContainer";
import ProjectInfoForm from "./contents/ProjectInfoForm";
import ProjectCategory from "./contents/ProjectCategory";
import ProjectField from "./contents/ProjectField";
import ProjectChargeForm from "./contents/ProjectChargeForm";
import PageSection from "component/layout/PageSection";
import ExtraAreaContainer from "component/layout/ExtraAreaContainer";
import { useCallback } from "react";
import {
  blankIncluded,
  modalConfirm,
  dateFormat,
  modalAlert,
  popupOpenCheck,
} from "util/common";
import { postInsertInq } from "lib/api";
import { RESULT } from "lib/common";
import { modalPrivacyPolicy } from "util/modal";

const initParams = {
  inqCd: [], // 프로젝트 형태(분류)
  inqDevelopCd: [], // 개발 분야
  inqPeriod: "", // 프로젝트 기간
  inqScdDts: "", // 오픈 예정일
  //inqBudget: "", // 프로젝트 예산
  file: null, // 첨부파일
  inqCntt: "", // 문의내용
  cmpNm: "", //담당자 회사정보
  cmpWriter: "", // 담당자이름,직위
  cmpTel: "", // 담당자 전화번호
  cmpEmail: "", // 담당자 이메일
  termsVer: "1.0", // 약관 버전
  termsAgreeYn: "N", // 약관동의 여부
};

const initValidation = {
  inqCd: false,
  inqDevelopCd: false,
  inqPeriod: false,
  inqScdDts: false,
  inqCntt: false,
  cmpNm: false,
  cmpWriter: false,
  cmpTel: false,
  termsAgreeYn: false,
};

const MAX_SIZE = 10000000; // 10MB

const InquiryContainer = () => {
  //
  const { t } = useTranslation(["page"]);
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState({ cmpTel: "", cmpEmail: "" });
  const [fileName, setFileName] = useState(null); // 첨부파일명

  // request data
  const [params, setParams] = useState(initParams);
  // popup message
  const popupMsg = t("page:popup.inquiry.register", { returnObjects: true });

  useEffect(() => {
    // params 값이 변경될 때마다 유효성 체크
    checkValidation();
  }, [params]);

  const checkValidation = useCallback(() => {
    //
    let checked = false;
    Object.keys(params).map((key) => {
      switch (key) {
        case ("file", "tersmVer"): {
          // 첨부파일은 옵션
          // termsVer 관리대상 아님
          break;
        }
        case ("inqCd", "inqDevelopCd"): {
          checked = params[key].length > 0 ? true : false;
          break;
        }
        case "termsAgreeYn": {
          checked = params[key] === "Y" ? true : false;
          break;
        }
        default: {
          checked = params[key] ? true : false;
          break;
        }
      }

      // 필수값만 체크
      if (initValidation.hasOwnProperty(key)) {
        initValidation[key] = checked;
      }
    });

    //
    const allTrue = Object.values(initValidation).every((value) => value);
    setDisabled(!allTrue);
  }, [params]);

  // 프로젝트 유형, 개발 분야 (checkbox)
  const onChangeCheckbox = (e) => {
    let arr = params[e.target.name];
    if (e.target.checked) {
      arr.push(e.target.value);
    } else {
      arr = arr.filter((a) => {
        return a !== e.target.value;
      });
    }
    setParams({ ...params, [e.target.name]: arr });
  };

  // input box
  const onChangeInput = (e) => {
    let value = e.target.value;
    if (blankIncluded(value) > 0) {
      let message = "";
      if (e.target.name === "cmpTel") {
        // 하이픈 제거
        value = value.replace(/-/g, "");

        // 전화번호 정규식 체크
        const regTelExp = /^\d{2,3}\d{3,4}\d{4}$/;
        const regPhoneExp = /^01([0|1|6|7|8|9]?)?([0-9]{3,4})?([0-9]{4})$/;

        if (
          value.length > 0 &&
          !regTelExp.test(value) &&
          !regPhoneExp.test(value)
        ) {
          message = "전화번호 형식에 맞게 입력해주세요";
        } else {
          message = "";
        }
      } else if (e.target.name === "cmpEmail") {
        // 이메일 정규식 체크
        const regExp =
          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        if (value.length > 0 && !regExp.test(value)) {
          message = "이메일 형식에 맞게 입력해주세요";
        } else {
          message = "";
        }
      }
      errorMessage(e.target.name, message);
    } else {
      value = null;
      // error message 초기화
      errorMessage(e.target.name, "");
    }

    setParams({ ...params, [e.target.name]: value });
  };

  // 전화번호, 휴대폰 번호 유효성 메세지
  const errorMessage = (name, newMessage) => {
    setMessage({ ...message, [name]: newMessage });
  };

  // dropdown
  const onChangeDropdown = (e) => {
    if (e.target.value === "0") {
      // value === 0: select
      setParams({ ...params, [e.target.name]: null });
    } else {
      setParams({ ...params, [e.target.name]: e.target.value });
    }
  };

  const onChangeDate = (name, date) => {
    if (!date) return;
    // TODO! 전송 전 date format 변경
    setParams({ ...params, [name]: date });
  };

  // 첨부파일
  const onChangeFile = (e) => {
    // 파일은 10MB 이내, 1개만 업로드 가능 (50->10MB로 변경)
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > MAX_SIZE) {
        modalAlert({
          title: "",
          message: popupMsg.sizeOver,
        });
        return;
      }

      // 1227 첨부파일 확장자 체크 추가 (pdf, hwp, zip만 가능)
      let fileExtension = file.name
        .substring(file.name.lastIndexOf(".") + 1, file.name.length)
        .toLowerCase();
      if (
        fileExtension !== "pdf" &&
        fileExtension !== "hwp" &&
        fileExtension !== "zip"
      ) {
        modalAlert({
          title: "",
          message: popupMsg.formatError,
          onConfirm: () => {
            setFileName(null);
          },
        });
        return;
      }

      setParams({ ...params, file: file });
      setFileName(file.name);
    }
  };

  // 첨부파일 삭제
  const onClickDelete = () => {
    setParams({ ...params, file: null });
    setFileName(null);
  };

  // 약관동의
  const onChangeAgreement = (e) => {
    const checked = e.target.checked ? "Y" : "N";
    console.log(`checked: ${checked}`);
    setParams({ ...params, termsAgreeYn: checked });
  };

  const onClickPrivacyPolicy = () => {
    modalPrivacyPolicy();
    setTimeout(() => {
      popupOpenCheck();
    }, 0);
  };

  // 문의등록
  const onClickButton = () => {
    modalConfirm({
      title: popupMsg.title,
      message: popupMsg.message,
      onConfirm: () => {
        // json object -> form data로 convert
        // 프로젝트 형태, 개발 분야 request param: string. 배열 -> 콤마(,)로 구분된 string으로 전달
        const frm = new FormData();
        for (let key in params) {
          let value = params[key];
          switch (key) {
            case ("inqCd", "inqDevelopCd"):
              value = params[key].join();
              break;
            case "inqScdDts":
              value = dateFormat(value);
              break;
            default:
              value = value;
              break;
          }
          if (value) {
            frm.append(key, value);
          }
        }

        // submit
        postInsertInq(frm).then((data) => {
          if (data.resultCode === RESULT.SUCCESS) {
            modalAlert({
              title: "",
              message: popupMsg.success,
            });
            // 초기화
            // CHECK! 초기화 실행 안되는 것 같다. 체크할 것
            setParams(initParams);
          } else {
            modalAlert({
              title: "",
              message: popupMsg.fail,
            });
          }
        });
      },
    });
  };

  return (
    <PageContainer className="inquiry">
      <PageTitle pageName="inquiry" />
      {/* 입력 폼 */}
      <PageSection>
        <ExtraAreaContainer>
          {/* 프로젝트 형태 */}
          <ProjectCategory
            onChangeCheckbox={onChangeCheckbox}
            selected={params["inqCd"]}
          />

          {/* 개발 분야 */}
          <ProjectField
            onChangeCheckbox={onChangeCheckbox}
            selected={params["inqDevelopCd"]}
          />

          {/* 프로젝트 정보 */}
          <ProjectInfoForm
            onChangeInput={onChangeInput}
            onChangeDropdown={onChangeDropdown}
            onChangeFile={onChangeFile}
            onChangeDate={onChangeDate}
            fileName={fileName}
            selectedDate={params["inqScdDts"]}
            onClickDelete={onClickDelete}
            data={params}
          />

          {/* 담당자 */}
          <ProjectChargeForm
            onChangeInput={onChangeInput}
            data={params}
            message={message}
          />

          {/* 개인정보 보호 정책 동의 */}
          <PrivacyPolicyAgreement
            onChangeCheckbox={onChangeAgreement}
            checked={params.termsAgreeYn === "Y"}
            onClickPrivacyPolicy={onClickPrivacyPolicy}
          />

          <ButtonContainer align="center">
            <Button
              disabled={disabled}
              primary
              text={t(`page:inquiryForm.part6.button`)}
              onClickButton={onClickButton}
            />
          </ButtonContainer>
        </ExtraAreaContainer>
      </PageSection>
    </PageContainer>
  );
};
export default InquiryContainer;
