import { useEffect, useState } from "react";

import MainContainer from "component/admin/common/AdminMainContainer";
import SearchGroup from "component/admin/common/SearchGroup";
import SearchItem from "component/admin/common/SearchItem";
import ListContainer from "component/admin/common/ListContainer";
import ProjectWorkList from "./contents/ProjectWorkList";
import { Button } from "component/admin/common/Items";
import { ProjectListHeader, PAGE_SIZE } from "component/admin/datas/constant";
import { getListWork } from "lib/adminApi";
import { RESULT } from "lib/common";
import { useNavigate } from "react-router-dom";
import { dateFormat } from "util/common";

const initParams = {
  searchStrDt: null,
  searchEndDt: null,
  searchValue: "", // 프로젝트명
  searchSorting: "modDts",
  page: 1,
  pageSize: PAGE_SIZE,
};

const AdminWorkContainer = () => {
  //
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);
  // 검색 버튼 클릭 시 true로 변경. 데이터 0인 경우 메세지 달라짐
  const [searchFlag, setSearchFlag] = useState(false);
  const [totalCount, setTotalCount] = useState();
  const [loader, setLoader] = useState(false);

  // 검색 파라미터
  const [isDesc, setIsDesc] = useState(true);
  const [params, setParams] = useState({ ...initParams, searchOrder: isDesc });

  useEffect(() => {
    //
    getWorks();
  }, [params.page, isDesc]);

  const onChangeItem = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  // 키워드 입력 후  enter 시 검색 실행
  const onkeydown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };

  const onClickDate = (name, date) => {
    setParams({ ...params, [name]: date });
  };

  // 검색 실행
  const onClickSearch = () => {
    //setParams({ ...params, page: 1 });
    setParams((prev) => ({ ...prev, page: 1 }));
    setSearchFlag(true);
    getWorks();
  };

  const getWorks = () => {
    setLoader(true);

    // shallow copy: 얕은 복사. 참조하는 값이 같이 둘 중 하나의 값이 변경되면 나머지도 함께 변함
    // let req = params;
    let req = { ...params };
    req.searchOrder = isDesc ? "desc" : "asc";
    req.searchStrDt = dateFormat(params.searchStrDt);
    req.searchEndDt = dateFormat(params.searchEndDt);

    getListWork(req).then((data) => {
      setLoader(false);
      if (data.resultCode === RESULT.SUCCESS) {
        setTotalCount(data.resultData.totalCount);
        setLists(data.resultData.list);
      } else {
        // 나머지 코드 처리
      }
    });
  };

  // 그리드 sorting
  const onClickSort = (name) => {
    setParams((prev) => ({
      ...prev,
      searchSorting: name,
      page: 1,
    }));

    setIsDesc((prev) => !prev);
  };

  // 페이지 이동
  const onClickPage = (page) => {
    setParams({ ...params, page: page });
  };

  // 상세 이동
  const onClickList = (workId) => {
    navigate(`/admin/works/${workId}`);
  };

  return (
    <MainContainer name="work" loader={loader}>
      <SearchGroup inline onClickSearch={onClickSearch}>
        <SearchItem
          type="date"
          label="기간"
          onChangeItem={onClickDate}
          startDt={params.searchStrDt}
          endDt={params.searchEndDt}
        />
        <SearchItem
          type="text"
          label="검색어"
          name="searchValue"
          value={params.searchValue}
          placeholder="프로젝트명 입력"
          onChangeItem={onChangeItem}
          onKeyDown={onkeydown}
        />
      </SearchGroup>

      {/* 목록 */}
      <ListContainer
        totalCount={totalCount}
        onClickPage={onClickPage}
        currentPage={params.page}
        actionButton={
          <Button
            name="프로젝트 등록"
            onClick={() => navigate("/admin/works/register")}
            search
          />
        }
      >
        <ProjectWorkList
          totalCount={totalCount}
          listHeader={ProjectListHeader}
          onClickSort={onClickSort}
          sortDesc={isDesc}
          sortItem={params.searchSorting}
          searchFlag={searchFlag}
          onClickList={onClickList}
          datas={lists}
          currentPage={params.page}
          keyword={params.searchValue}
          loader={loader}
        />
      </ListContainer>
    </MainContainer>
  );
};

export default AdminWorkContainer;
