// components
import PageVisualization from "component/common/molecules/PageVisualization";
import PageTitle from "component/common/atoms/PageTitle";
import Tabs from "component/common/atoms/Tabs";
import HighLighter from "component/common/atoms/HighLighter";

import { lazy, Suspense, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const TAB_ITEMS = [
  { label: "Smart Fit System", title: "프로젝트 문의", value: "tab1" },
  { label: "AI Solution", title: "AI 컨설팅", value: "tab2" }
];

const tabMap = {
  tab1: () => import("./tabs/TabFirstContent"),
  tab2: () => import("./tabs/TabSecondContent")
};

const InquiryContainer = () => {
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
    <>
      <PageVisualization
        category="고객지원"
        title="Customer Support"
        description="사용자 경험과 운영 효율성을 고려한<br>풀스택 외주 개발로 비즈니스 가치를 더하다."
        visual="inquiry"
      />
      <PageTitle emphasize="비지니스에 필요한 기술 파트너" title="스마트코어">
        <>
          <HighLighter text="문의사항" type="emphasize" />을 남겨 주시면
          <br />
          빠른 시간안에 <HighLighter text="답변" type="emphasize" />
          드리겠습니다.
        </>
      </PageTitle>
      <Tabs items={TAB_ITEMS} active={activeTab} onChange={onChangeTab} />
      <div className="tab-content">
        <Suspense fallback={<div>Loading</div>}>
          <LazyComponent />
        </Suspense>
      </div>
    </>
  );
};

export default InquiryContainer;
