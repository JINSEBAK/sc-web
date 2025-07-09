import PageContainer from "component/layout/PageContainer";
import PageTitle from "component/common/PageTitle";
import { useState } from "react";
import TechAi from "./contents/TechAi";
import TechBlockchain from "./contents/TechBlockchain";
import TechFintech from "./contents/TechFintech";
import TechIoT from "./contents/TechIoT";

const TechContainer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const onChangeTab = (value) => {
    setActiveTab(value);
  };

  return (
    <PageContainer className="tech">
      <PageTitle
        pageName="tech"
        isTab={true}
        activeTab={activeTab}
        onChangeTab={onChangeTab}
      />
      {activeTab === 0 && <TechAi />}
      {activeTab === 1 && <TechBlockchain />}
      {activeTab === 2 && <TechFintech />}
      {activeTab === 3 && <TechIoT />}
    </PageContainer>
  );
};

export default TechContainer;
