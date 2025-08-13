// styles
import styles from "./SmartFilt.module.css";
// components
import ImageItem from "component/common/atoms/ImageItem";

import { useEffect, useRef, useState, useMemo } from "react";
import { getListWork } from "lib/api";
import { HistoryItem } from "./Items";
import classNames from "classnames";

const HistoryContainer = ({ children }) => {
  return <div className={styles.lists}>{children}</div>;
};

const HistoryList = () => {
  //
  const samples = [
    {
      workDt: "2025-08-12",
      workNm: "지역서점 공동수배송 APP 고도화",
      workCli: "한국서점조합연합회"
    },
    {
      workDt: "2025-02-12",
      workNm: "종로Pick 앱 운영유지",
      workCli: "종로구청"
    },
    {
      workDt: "2024-02-12",
      workNm: "종로Pick 앱 운영유지",
      workCli: "종로구청"
    },
    {
      workDt: "2024-02-12",
      workNm: "종로Pick 앱 운영유지",
      workCli: "종로구청"
    },
    {
      workDt: "2024-02-12",
      workNm: "종로Pick 앱 운영유지",
      workCli: "종로구청"
    },
    {
      workDt: "2023-02-12",
      workNm: "종로Pick 앱 운영유지",
      workCli: "종로구청"
    },
    {
      workDt: "2023-02-12",
      workNm: "종로Pick 앱 운영유지",
      workCli: "종로구청"
    },
    {
      workDt: "2023-02-12",
      workNm: "종로Pick 앱 운영유지",
      workCli: "종로구청"
    }
  ];

  const [params, setParams] = useState({
    searchSorting: "workDts",
    searchOrder: "desc",
    page: 1,
    pageSize: 16
  });
  const [lists, setLists] = useState([]);

  const isNext = useRef(true);

  const getDatas = async () => {
    const response = await getListWork(params);
    console.log(response);
    if (response.resultCode === "SUCCESS") {
      // next 페이지 유무 isNext
      setLists([...lists, ...response.resultData.list]);
    }
  };

  const onClickMore = (prevState) => {
    setParams({ ...params, page: prevState.page + 1 });
  };

  const getYear = (iso) => Number(String(iso).slice(0, 4));

  const formatDate = (date) => {
    const m = date.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (!m) return "";
    const [, y, mo] = m;
    return `${y}.${mo.padStart(2, "0")}`;
  };

  const colors = [
    "#3953AB",
    "#2E4289",
    "#223266",
    "#172144",
    "#111933",
    "#0C91DA",
    "#0974AF",
    "#086599",
    "#06486D",
    "#042C42",
    "#1AA19B",
    "#137A75",
    "#106662",
    "#0D524F",
    "#0A3E3C"
  ];

  // 최신 연도는 찾아서 memoization 해둠
  const lastesYear = useMemo(
    () => Math.max(...samples.map((s) => getYear(s.workDt))),
    [samples]
  );

  const getColor = (year, lastest) => {
    const mod = (n, m) => ((n % m) + m) % m;
    const diff = lastest - year; // 최신 0, 과거로 갈수록 + 1
    return colors[mod(diff, colors.length)];
  };

  useEffect(() => {
    getDatas();
  }, [params.page]);

  return (
    <>
      <HistoryContainer>
        {/* {lists.map((list, index) => (
        <HistoryItem />
        ))} */}

        {samples.map((item, index) => (
          <HistoryItem
            key={`history-item-${index}`}
            client={item.workCli}
            title={item.workNm}
            bgColor={getColor(getYear(item.workDt), lastesYear)}
            date={formatDate(item.workDt)}
          />
        ))}
      </HistoryContainer>
      {isNext && (
        <div className={classNames(styles.btns, styles.center)}>
          <ImageItem imgFile="btn_view_more.svg" onClick={onClickMore} />
        </div>
      )}
    </>
  );
};

export default HistoryList;
