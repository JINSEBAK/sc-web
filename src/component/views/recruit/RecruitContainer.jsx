import styles from "./Recruit.module.css";
// components
import PageVisualization from "component/common/molecules/PageVisualization";
import MiddleTitle from "component/common/atoms/MiddelTitle";
import FlexContainer from "component/common/atoms/FlexContainer";
//
import { useTranslation } from "react-i18next";
import { ItemBox } from "./Items";

const RecruitContainer = () => {
  const { t } = useTranslation("recruit");

  const talents = t(`talents`, { returnObjects: true });
  const welpares = t(`welpares`, { returnObjects: true });
  return (
    <>
      <PageVisualization
        category="채용정보"
        title="Recruitment"
        description="당신의 가능성이, 우리의 미래가 됩니다."
      />
      <div className={styles.container}>
        <div style={{ width: "1280px", margin: "0 auto" }}>
          <MiddleTitle
            content="인재상"
            description="같은 방향을 바라보며, 함께 만들어갈 인재를 찾고 있습니다."
            size="small"
          />
          <FlexContainer gap={8}>
            {talents.map((talent, index) => (
              <ItemBox type="talent">
                <div dangerouslySetInnerHTML={{ __html: talent.head }} />
                <div dangerouslySetInnerHTML={{ __html: talent.body }} />
              </ItemBox>
            ))}
          </FlexContainer>
        </div>
        <div style={{ width: "1280px", margin: "0 auto" }}>
          <MiddleTitle
            content="복지제도"
            description="구성원의 건강과 행복을 위해<br>활기찬 근무환경을 만들어 가겠습니다."
            size="small"
          />
          <FlexContainer gap={8} wrappable={true}>
            {welpares.map((welpare, index) => (
              <ItemBox type="welpare">
                <>{welpare.title}</>
                <>{welpare.sub}</>
              </ItemBox>
            ))}
          </FlexContainer>
        </div>
      </div>
    </>
  );
};

export default RecruitContainer;
