import styles from "./About.module.css";

import Tabs from "component/common/atoms/Tabs";
import PageVisualization from "component/common/molecules/PageVisualization";

import { useState, lazy, Suspense } from "react";

const TAB_ITEMS = [
  {
    label: "",
    title: "스마트코어",
    value: "tab1"
  },
  {
    label: "",
    title: "주요사업",
    value: "tab2"
  },
  {
    label: "",
    title: "연혁",
    value: "tab3"
  },
  {
    label: "",
    title: "오시는 길",
    value: "tab4"
  }
];
const tabMap = {
  tab1: () => import("./tabs/TabFirstContent"),
  tab2: () => import("./tabs/TabSecondContent"),
  tab3: () => import("./tabs/TabThirdContent"),
  tab4: () => import("./tabs/TabFourthContent")
};

const AboutContainer = () => {
  //
  const [activeTab, setActiveTab] = useState("tab1");
  const [LazyComponent, setLazyComponent] = useState(() =>
    lazy(tabMap["tab1"])
  );

  const onChangeTab = (tab) => {
    setActiveTab(tab);
    setLazyComponent(() => lazy(tabMap[tab]));
  };
  return (
    <>
      <PageVisualization
        category="회사소개"
        title="Company"
        description="기술로 더 나은 미래를 만들다."
      >
        <Tabs
          items={TAB_ITEMS}
          active={activeTab}
          position={"title"}
          onChange={onChangeTab}
        />
      </PageVisualization>

      <div className="tab-content">
        <Suspense fallback={<div>Loading</div>}>
          <LazyComponent />
        </Suspense>
      </div>
    </>
  );
};

export default AboutContainer;
