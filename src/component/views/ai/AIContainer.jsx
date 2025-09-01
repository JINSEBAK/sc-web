import styles from "./AI.module.css";
// components
import Tabs from "component/common/atoms/Tabs";
import PageTitle from "component/common/atoms/PageTitle";
import PageVisualization from "component/common/molecules/PageVisualization";

import { useState, lazy, Suspense } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const TAB_ITEMS = [
  {
    label: "SMART AI SOLUTION",
    title: "AI 기반 산업 맞춤형 솔루션 개발",
    value: "tab1"
  },
  {
    label: "SMART SAFETY SOLUTION",
    title: "AI 기반 산업 안전 및 재난 대응 시스템",
    value: "tab2"
  },
  {
    label: "SMART GEN AI(GPT) SOLUTION",
    title: "AI 챗봇 및 고객 응대 자동화 시스템",
    value: "tab3"
  }
];

const tabMap = {
  tab1: () => import("./tabs/TabFirstContent"),
  tab2: () => import("./tabs/TabSecondContent"),
  tab3: () => import("./tabs/TabThirdContent")
};

const AIContainer = () => {
  //
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const defaultTab = searchParams.get("tab") || "tab1";

  const [activeTab, setActiveTab] = useState(defaultTab);
  const [LazyComponent, setLazyComponent] = useState(() =>
    lazy(tabMap[defaultTab])
  );

  const onChangeTab = (tab) => {
    setActiveTab(tab);
    setLazyComponent(() => lazy(tabMap[tab]));

    // url query 업데이트
    navigate(`?tab=${tab}`, { replace: true });
  };

  return (
    <div className={styles["ai-w"]}>
      <PageVisualization
        category="스마트코어 기술"
        title="AI Solution"
        description="AI의 무한한 잠재력을 담다"
        visual="ai"
      />
      <PageTitle title="스마트코어 AI" emphasize="최적화된">
        <div style={{ textAlign: "center" }}>
          고객 맞춤형 AI 로드맵을 수립하고,
          <br />
          기술·비즈니스적 관점에서 실행 가능성을 검토합니다.
          <br />
          기업의 비즈니스 모델과 산업 특성을 분석하여 최적의 AI 도입 전략을
          제안합니다.
          <br />
          <br /> 스마트코어는 산업현장, 안전재난 대응, 고객응대분야의
          <br />
          AI시스템에 대해 집중합니다.
        </div>
      </PageTitle>
      <Tabs items={TAB_ITEMS} active={activeTab} onChange={onChangeTab} />
      <div className="tab-content">
        <Suspense fallback={<div>Loading..</div>}>
          <LazyComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default AIContainer;
