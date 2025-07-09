import { useEffect, useState } from "react";

import MainContainer from "component/admin/common/AdminMainContainer";
import SearchGroup from "component/admin/common/SearchGroup";
import ListContainer from "component/admin/common/ListContainer";
import SearchItem from "component/admin/common/SearchItem";
import InquiryList from "./contents/InquiryList";

import { InquiryListHeader, PAGE_SIZE } from "component/admin/datas/constant";
import { getListInq } from "lib/adminApi";
import { useContext } from "react";
import { CodeContext } from "store/CodeStore";
import { COMMON_CODE, RESULT } from "lib/common";
import { useNavigate } from "react-router-dom";
import { dateFormat } from "util/common";

const initParams = {
  searchStrDt: "",
  searchEndDt: "",
  searchTypeCd: "",
  searchSorting: "regDts",
  page: 1,
  pageSize: PAGE_SIZE,
};

const AdminInquiryContainer = () => {
  //
  const navigate = useNavigate();
  const CODES = useContext(CodeContext);

  const [codeList, setCodeList] = useState([]);
  const [inquries, setInquries] = useState([]); // 문의 목록
  const [searchFlag, setSearchFlag] = useState(false);
  const [totalCount, setTotalCount] = useState();
  const [loader, setLoader] = useState(false);

  const [isDesc, setIsDesc] = useState(true); // ture: 내림차순, false: 오름차순
  const [params, setParams] = useState({ ...initParams, searchOrder: isDesc });

  useEffect(() => {
    getInquries();
  }, [params.page, isDesc]);

  useEffect(() => {
    const tmp = CODES.filter((code) => {
      return code.commcdParentId === COMMON_CODE.INQ;
    });
    setCodeList(tmp);
  }, [CODES]);

  // 목록 받아오기
  const onClickSearch = () => {
    setParams({ ...params, page: 1 });
    setSearchFlag(true);
    getInquries();
  };

  const getInquries = () => {
    setLoader(true);

    // shallow copy: 얕은 복사. 참조하는 값이 같이 둘 중 하나의 값이 변경되면 나머지도 함께 변함
    // let req = params;
    let req = { ...params };
    req.searchOrder = isDesc ? "desc" : "asc";
    req.searchStrDt = dateFormat(req.searchStrDt);
    req.searchEndDt = dateFormat(req.searchEndDt);

    req.searchTypeCd = params.searchTypeCd === 0 ? "" : params.searchTypeCd;

    getListInq(req).then((data) => {
      setLoader(false);
      if (data.resultCode === RESULT.SUCCESS) {
        setTotalCount(data.resultData.totalCount);
        setInquries(data.resultData.list);
      } else {
        setInquries([]);
        setTotalCount(0);
      }
    });
  };

  // 기간 검색
  const onChangeDate = (name, date) => {
    setParams({ ...params, [name]: date });
  };

  // 개발 항목
  const onChangeDropdown = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  // 그리드 sorting
  const onClickSort = (name) => {
    setParams((prev) => ({
      ...prev,
      searchSorting: name,
      page: 1,
    }));

    // CHECK: 정렬방식은 별도 state로 관리 (object내에서 사용했을 때 boolean => string으로 변경됨;;)
    setIsDesc((prev) => !prev);
  };

  // 페이지 이동
  const onClickPage = (page) => {
    setParams({ ...params, page: page });
  };

  // 상세 이동
  const onClickRow = (inqId) => {
    if (!inqId) return;
    navigate(`/admin/inquiry/${inqId}`);
  };

  return (
    <MainContainer name="inquiry" loader={loader}>
      <SearchGroup inline onClickSearch={onClickSearch}>
        <SearchItem
          type="date"
          label="기간"
          startDt={params.searchStrDt}
          endDt={params.searchEndDt}
          onChangeItem={onChangeDate}
        />
        <SearchItem
          type="select"
          label="프로젝트 형태"
          name={"searchTypeCd"}
          options={codeList}
          onChangeItem={onChangeDropdown}
        />
      </SearchGroup>

      {/* 목록 */}

      <ListContainer
        totalCount={totalCount}
        onClickPage={onClickPage}
        currentPage={params.page}
      >
        <InquiryList
          totalCount={totalCount}
          listHeader={InquiryListHeader}
          codeList={codeList}
          onClickSort={onClickSort}
          sortDesc={isDesc}
          sortItem={params.searchSorting}
          onClickRow={onClickRow}
          datas={inquries}
          searchFlag={searchFlag}
          currentPage={params.page}
          loader={loader}
        />
      </ListContainer>
    </MainContainer>
  );
};

export default AdminInquiryContainer;
