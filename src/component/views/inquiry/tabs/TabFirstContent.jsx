import styles from "../Inquiry.module.css";

import Button from "component/common/atoms/Button";
import FlexContainer from "component/common/atoms/FlexContainer";
import Textarea from "component/common/atoms/Textarea";
import TextInput from "component/common/atoms/TextInput";
import TermsAgree from "component/common/organisms/TermsAgree";
import FileUploader from "component/common/molecules/FileUploader";
import { ContentBox } from "component/common/atoms/Containers";
import { FormItem, TypeCheck } from "../Items";

import Dropdown from "component/common/atoms/Dropdown";
import Datepicker from "component/common/atoms/Datepicker";

import { useTranslation } from "react-i18next";
import { usePopup } from "hooks/usePopup";
import { useState } from "react";
import { postInsertInq } from "lib/api";

const TabFirstContent = () => {
  //
  const { t } = useTranslation("inquiry");
  const types = t(`types`, { returnObjects: true });
  const parts = t(`parts`, { returnObjects: true });

  const initDatas = {
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
    termsAgreeYn: "N" // 약관동의 여부
  };

  const [datas, setDatas] = useState(initDatas);

  const { show } = usePopup();

  const onChangeItem = (name, value) => {
    console.log(name, value);
    setDatas({ ...datas, [name]: value });
  };

  const onCheckedItem = (name, item) => {
    console.log(name, item);
  };

  const onSubmit = async () => {
    await show({
      title: "입력하신 내용으로<br>문의하시겠습니까?",
      message: "",
      type: "confirm",
      onConfirm: onConfirmCallback
    });
  };

  const onConfirmCallback = async () => {
    console.log(datas);
    const resp = await postInsertInq(datas);
    console.log(resp);
    if (resp.success) {
    } else {
      await show({
        title: resp.message
      });
    }
  };

  return (
    <div className={styles.container}>
      <ContentBox>
        <FormItem title="프로젝트 유형" required={true} multiSelectable={true}>
          <FlexContainer>
            {types.map((type, index) => (
              <TypeCheck
                key={`type-${index}`}
                text={type}
                value={type}
                onChange={(item) => onCheckedItem("inqCd", item)}
              />
            ))}
          </FlexContainer>
        </FormItem>
        <FormItem title="개발 분야" required={true} multiSelectable={true}>
          <FlexContainer>
            {parts.map((part, index) => (
              <TypeCheck
                key={`part-${index}`}
                text={part}
                value={part}
                onChange={() => {}}
              />
            ))}
          </FlexContainer>
        </FormItem>
        <FormItem
          title="프로젝트 상세"
          required={false}
          multiSelectable={false}
        >
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Dropdown
              label="프로젝트 기간"
              required={true}
              placeholder="기간 선택"
              options={[
                { text: "1~2개월", value: "1~2개월" },
                { text: "3~5개월", value: "3~5개월" },
                { text: "6개월이상", value: "6개월이상" }
              ]}
              onChange={(value) => onChangeItem("inqPeriod", value)}
            />
            <Datepicker
              label="착수 예정일"
              required={false}
              placeholder="착수 예정일 입력"
              onChange={(value) => onChangeItem("inqScdDts", value)}
            />
            <Textarea
              placeholder="프로젝트 상세 내용 입력"
              name="inqCntt"
              maxLength={5000}
              onChange={onChangeItem}
            />
            <FileUploader />
          </div>
        </FormItem>
        <FormItem title="담당자 정보" required={true} multiSelectable={false}>
          <FlexContainer gap={16} wrappable={true}>
            <TextInput
              label="회사명"
              required={true}
              placeholder="회사명 입력"
            />
            <TextInput
              label="이름/직위"
              required={true}
              placeholder="이름과 직위를 입력해주세요."
            />
            <TextInput
              label="전화번호"
              required={true}
              placeholder="'-' 제외 전화번호 입력"
            />
            <TextInput
              label="이메일"
              required={true}
              placeholder="답변을 받을 이메일을 입력해주세요."
            />
            <TermsAgree />
          </FlexContainer>
        </FormItem>
      </ContentBox>
      <div className={styles.btns}>
        <Button
          text="문의하기"
          variant="primary"
          size="large"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default TabFirstContent;
