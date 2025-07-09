import PageSection from "component/layout/PageSection";
import ExtraAreaContainer from "component/layout/ExtraAreaContainer";
import {
  TechSectionTitle,
  TechContent,
  TechSubTitle,
} from "../TechViewElement";
import { useTranslation } from "react-i18next";
import { TECH_IMG_PATH } from "datas/constant";
import { useContext } from "react";
import { LanguageContext } from "store/LangaugeStore";

const TechAi = () => {
  const { t } = useTranslation(["page"]);
  const { language } = useContext(LanguageContext);
  const contents = t(`page:tech.teches.ai.contents`, { returnObjects: true });
  const subContents = t(`page:tech.teches.ai.subContents`, {
    returnObjects: true,
  });

  return (
    <PageSection>
      <ExtraAreaContainer>
        <TechSectionTitle chapter={"ai"} />
        {contents.length > 0 && (
          <>
            {contents.map((content, index) => (
              <TechContent
                key={`tech-content-${index}`}
                title={
                  <TechSubTitle title={content.title} subText={content.sub} />
                }
                description={content.text}
                imgUrl={TECH_IMG_PATH[`ai_${index}_${language}`]?.default}
                mobileImgUrl={
                  TECH_IMG_PATH[`ai_${index}_${language}_m`]?.default
                }
              >
                {index === 0 && subContents.length > 0 && (
                  <ul className="sub-content">
                    {subContents.map((cont, index) => (
                      <li key={`sub-content-${index}`}>
                        <p dangerouslySetInnerHTML={{ __html: cont }} />
                      </li>
                    ))}
                  </ul>
                )}
              </TechContent>
            ))}
          </>
        )}
      </ExtraAreaContainer>
    </PageSection>
  );
};

export default TechAi;
