import PageSection from "component/layout/PageSection";
import ExtraAreaContainer from "component/layout/ExtraAreaContainer";
import {
  TechSectionTitle,
  TechContent,
  TechCardList,
} from "../TechViewElement";
import { useTranslation } from "react-i18next";
import { TECH_IMG_PATH } from "datas/constant";
import { useContext } from "react";
import { LanguageContext } from "store/LangaugeStore";

const TechIoT = () => {
  const { t } = useTranslation(["page"]);
  const { language } = useContext(LanguageContext);

  return (
    <PageSection>
      <ExtraAreaContainer>
        <TechSectionTitle chapter={"iot"} />
        <TechContent
          imgUrl={TECH_IMG_PATH[`iot_${language}`].default}
          mobileImgUrl={TECH_IMG_PATH[`iot_${language}_m`].default}
        >
          {/* TechContent 컴포넌트의 children이 있는 경우, 이미지 요소 다음에 표시된다.  */}
          <TechCardList
            datas={t("page:tech.teches.iot.contents", { returnObjects: true })}
            vertical
          />
        </TechContent>
      </ExtraAreaContainer>
    </PageSection>
  );
};

export default TechIoT;
