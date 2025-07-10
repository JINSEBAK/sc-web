import styles from "../Inquiry.module.css";

import Button from "component/common/atoms/Button";
import FlexContainer from "component/common/atoms/FlexContainer";
import { ContentBox } from "component/common/atoms/Containers";
import { FormItem, TypeCheck } from "../Items";

import { useTranslation } from "react-i18next";
import Dropdown from "component/common/atoms/Dropdown";

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
          <Dropdown
            label="프로젝트 기간"
            required={true}
            placeholder="기간 선택"
            options={[
              { text: "1~2개월", value: "1~2개월" },
              { text: "3~5개월", value: "3~5개월" },
              { text: "6개월이상", value: "6개월이상" }
            ]}
          />
        </FormItem>
        <FormItem title="담당자 정보" required={true} multiSelectable={false}>
          <>유형선택 checkbox</>
        </FormItem>
      </ContentBox>
      <div className={styles.btns}>
        <Button text="문의하기" variant="third" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default TabFirstContent;
