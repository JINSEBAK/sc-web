import styles from "../About.module.css";

import PageTitle from "component/common/atoms/PageTitle";
import MiddleTitle from "component/common/atoms/MiddelTitle";
import { ContentBox, ContentInner } from "component/common/atoms/Containers";
import { BasicInfo, ClientItem, MissionItem, PatentItem } from "../Items";
import { useTranslation } from "react-i18next";
import FlexContainer from "component/common/atoms/FlexContainer";

const TabFirstContent = () => {
  const { t } = useTranslation("about");

  const missions = t(`missions`, { returnObjects: true });
  const clients = t(`clients`, { returnObjects: true });

  return (
    <div className={styles.container}>
      <ContentBox>
        <PageTitle title="스마트코어" emphasize="미래 혁신의 코어">
          <div style={{ textAlign: "center" }}>
            AI 기술을 통해 사람과 산업의 효율을
            <br />
            혁신하는 글로벌 테크 리더
          </div>
        </PageTitle>
      </ContentBox>
      <ContentBox>
        <ContentInner gap={{ bottom: "100px" }}>
          <MiddleTitle
            content="Mission"
            size="small"
            description=" 고객 중심의 맞춤형 AI 솔루션을 통해 디지털 전환을 가속화하고,<br>경쟁력 있는 비즈니스 환경을 구축하여<br>보다 편리하고 안전한 삶을 실현하는 데 기여합니다."
          />
          <FlexContainer gap={0} align={"center"}>
            {missions.map((mission, index) => (
              <MissionItem
                key={`mission-${index}`}
                title={mission.title}
                description={mission.description}
              />
            ))}
          </FlexContainer>
        </ContentInner>
      </ContentBox>
      <ContentBox isFull={true}>
        <BasicInfo />
      </ContentBox>
      <ContentBox>
        <MiddleTitle
          content="특허"
          description="스마트코어는 AI·IT 융합기술 기반의<br>독자적 지식재산 확보를 위해 지속적으로 연구하고 있습니다."
          size="small"
        />
        <FlexContainer gap={24} wrappable={true} align={"center"}>
          {Array.from({ length: 6 }, (_, index) => (
            <PatentItem key={`patent-${index}`} name={index} imgFile={index} />
          ))}
        </FlexContainer>
      </ContentBox>
      <ContentBox>
        <MiddleTitle
          content="Client"
          description="혁신적인 기술과 고객 중심의 서비스로,<br>성공을 위한 최고의 비즈니스 파트너가 되겠습니다."
          size="small"
        />
        <FlexContainer gap={24} wrappable={true} align={"center"}>
          {clients.map((client, index) => (
            <ClientItem
              key={`client-${index}`}
              name={client.name}
              imgFile={client.imgFile}
            />
          ))}
        </FlexContainer>
      </ContentBox>
    </div>
  );
};

export default TabFirstContent;
