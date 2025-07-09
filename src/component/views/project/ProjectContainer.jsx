import PageContainer from "../../layout/PageContainer";
import PageTitle from "../../common/PageTitle";
import PageSection from "component/layout/PageSection";
import { useState, useContext } from "react";
import { CodeContext } from "store/CodeStore";

import { WorkList, WorkTabs } from "./ProjectViewElement";
import { useEffect } from "react";
import { getListWork } from "lib/api";
import { RESULT, COMMON_CODE } from "lib/common";
import ExtraAreaContainer from "component/layout/ExtraAreaContainer";
import { modalFullDetail } from "util/common";
import i18n from "i18n";
import { useRef } from "react";
import Loader from "component/common/Loader";

const initParams = {
  searchStrDt: null,
  searchEndDt: null,
  searchValue: null,
  searchTypeCd: null,
  searchSorting: "workDts",
  searchOrder: "desc",
  page: 1,
  pageSize: 12,
};

const ProjectContainer = () => {
  //
  const CODES = useContext(CodeContext); // 공통 코드
  const [activeTab, setActiveTab] = useState(null); // null: all
  const [works, setWorks] = useState([]); // 작업물 목록
  const [tabMenu, setTabMenu] = useState([]);
  const [language, setLanguage] = useState();
  const [next, setNext] = useState(false);

  const [params, setParams] = useState(initParams);

  const boxRef = useRef(null);

  useEffect(() => {
    setLanguage(i18n.language ?? "ko");
  }, [i18n.language]);

  useEffect(() => {
    // api 호출
    getListWork(params).then((data) => {
      if (data.resultCode === RESULT.SUCCESS) {
        let tmp = works;
        tmp = works.concat(data.resultData.list);
        setWorks(tmp);
        setNext(data.resultData.next);
      }
    });
  }, [params]);

  useEffect(() => {
    const tmp = CODES.filter((code) => {
      return code.commcdParentId === COMMON_CODE.WORK;
    });
    if (tmp.length > 0) {
      setTabMenu(tmp);
    }
  }, [CODES]);

  useEffect(() => {
    setWorks([]); // 초기화
    setParams((prev) => ({ ...prev, searchTypeCd: activeTab, page: 1 }));
  }, [activeTab]);

  const onChangeTab = (value) => {
    setActiveTab(value);
  };

  const onClickCard = (workId) => {
    // 페이지 이동 > 팝업으로 변경
    modalFullDetail(workId);
  };

  const onIntersect = async ([entry]) => {
    if (entry.isIntersecting && next) {
      setParams((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };
  // paging
  useEffect(() => {
    if (!boxRef.current) return;
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.9 });
    observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, [boxRef, next]);

  return (
    <PageContainer className="project">
      <PageTitle pageName="projects" />
      <PageSection>
        <ExtraAreaContainer>
          <WorkTabs
            menus={tabMenu}
            activeTab={activeTab}
            onChangeTab={onChangeTab}
          />
          <WorkList
            datas={works}
            onClickCard={onClickCard}
            language={language}
          />

          {next && (
            <div ref={boxRef} className="observe-target">
              <Loader />
            </div>
          )}
        </ExtraAreaContainer>
      </PageSection>
    </PageContainer>
  );
};

// react-router-dom v6에서는 withRouter 대신 useNavigate 사용
export default ProjectContainer;
