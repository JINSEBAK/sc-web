import PageSection from "component/layout/PageSection";
import ExtraAreaContainer from "component/layout/ExtraAreaContainer";
import {
  TechSectionTitle,
  TechCardList,
  TechContent,
  FintechContent,
} from "../TechViewElement";
import { useTranslation } from "react-i18next";

const TechFintech = () => {
  const { t } = useTranslation(["page"]);
  const datas = t(`page:tech.teches.fintech.pocession`, {
    returnObjects: true,
  });
  return (
    <PageSection>
      <ExtraAreaContainer>
        <TechSectionTitle chapter={"fintech"} />
        <TechContent>
          <FintechContent title={datas.title} items={datas.items} />
          <TechCardList
            datas={t(`page:tech.teches.fintech.contents`, {
              returnObjects: true,
            })}
          />
        </TechContent>
      </ExtraAreaContainer>
    </PageSection>
  );
};

export default TechFintech;
