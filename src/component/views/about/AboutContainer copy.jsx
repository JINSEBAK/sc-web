import { useState } from "react";
import { Customers, ScrollGraphicText, WindowTitle } from "./AboutViewElements";

import PageContainer from "component/layout/PageContainer";
import AboutTechnical from "./contents/AboutTechnical";
import AboutCompany from "./contents/AboutCompany";
import ScrollWindow from "component/common/ScrollWindow";
import CompanyHistory from "./contents/CompanyHistory";
import PageTitle from "component/common/PageTitle";
import CompanyVision from "./contents/CompanyVision";
import { useTranslation } from "react-i18next";
import WorkDivision from "./contents/WorkDivision";

const AboutContainer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation(["page"]);

  const onChangeTab = (value) => {
    setActiveTab(value);
  };

  return (
    <PageContainer className="about">
      <PageTitle
        pageName="about"
        isTab={true}
        activeTab={activeTab}
        onChangeTab={onChangeTab}
      />
      <>
        {activeTab === 0 && (
          <>
            <AboutCompany />
            <CompanyVision />
            <WindowTitle title={t(`page:about.info.vision.title`)} />
            <ScrollWindow
              contents={<ScrollGraphicText text={"SmartCore"} />}
              height="548"
            />
            <WorkDivision />
            <AboutTechnical />
          </>
        )}
        {activeTab === 1 && <CompanyHistory />}
        {activeTab === 2 && <Customers />}
      </>
    </PageContainer>
  );
};

export default AboutContainer;
