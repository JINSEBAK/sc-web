import styles from "../Inquiry.module.css";

import Button from "component/common/atoms/Button";
import FlexContainer from "component/common/atoms/FlexContainer";
import Textarea from "component/common/atoms/Textarea";
import { ContentBox } from "component/common/atoms/Containers";
import { FormItem, TypeCheck } from "../Items";

import Dropdown from "component/common/atoms/Dropdown";
import Datepicker from "component/common/atoms/Datepicker";

import { useTranslation } from "react-i18next";
import TextInput from "component/common/atoms/TextInput";

const TabFirstContent = () => {
  //
  const { t } = useTranslation("inquiry");

  const types = t(`types`, { returnObjects: true });
  const parts = t(`parts`, { returnObjects: true });

  const onSubmit = () => {};
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
                onChange={() => {}}
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
                { text: "6개월이상", value: "6개월이상" },
              ]}
            />
            <Datepicker
              label="착수 예정일"
              required={false}
              placeholder="착수 예정일 입력"
            />
            <Textarea placeholder="프로젝트 상세 내용 입력" />
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
          </FlexContainer>
        </FormItem>
      </ContentBox>
      <div className={styles.btns}>
        <Button
          text="문의하기"
          variant="third"
          size="large"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default TabFirstContent;
