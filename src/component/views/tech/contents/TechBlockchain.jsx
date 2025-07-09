import PageSection from "component/layout/PageSection";
import {
  TechSectionTitle,
  TechContent,
  TechSubTitle,
  PatentBanner,
} from "../TechViewElement";
import { useTranslation } from "react-i18next";
import { TECH_IMG_PATH } from "datas/constant";
import { Fragment, useContext } from "react";
import ExtraAreaContainer from "component/layout/ExtraAreaContainer";
import { LanguageContext } from "store/LangaugeStore";

const TechBlockchain = () => {
  const { t } = useTranslation(["page"]);
  const { language } = useContext(LanguageContext);

  // 블록체인 콘텐츠
  const contents = t(`page:tech.teches.blockchain.contents`, {
    returnObjects: true,
  });

  // 특허정보
  const patentInfo = t(`page:tech.teches.blockchain.patent`, {
    returnObjects: true,
  });

  return (
    <PageSection stretch>
      <ExtraAreaContainer>
        <TechSectionTitle chapter={"blockchain"} />
        {contents.length > 0 && (
          <>
            {contents.map((content, index) => {
              return (
                <Fragment key={`tech-blockchain-${index}`}>
                  <TechContent
                    title={
                      <TechSubTitle
                        title={content.title}
                        subText={content.sub}
                      />
                    }
                    description={content.text}
                    imgUrl={TECH_IMG_PATH[`bc_${index}_${language}`].default}
                    mobileImgUrl={
                      TECH_IMG_PATH[`bc_${index}_${language}_m`].default
                    }
                  />
                </Fragment>
              );
            })}
          </>
        )}
      </ExtraAreaContainer>
      {/* 특허배너 */}
      <PatentBanner info={patentInfo} />
    </PageSection>
  );
};

export default TechBlockchain;
