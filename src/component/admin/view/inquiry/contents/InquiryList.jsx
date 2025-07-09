import ListHeader from "component/admin/common/ListHeader";
import NoSearchData from "component/admin/common/NoSearchData";
import { PAGE_SIZE } from "component/admin/datas/constant";

const InquiryList = (props) => {
  //
  const {
    totalCount,
    listHeader,
    datas,
    onClickSort,
    sortDesc,
    sortItem,
    onClickRow,
    searchFlag,
    currentPage,
    loader = false,
  } = props;

  // 프로젝트 형태
  const DevelopCode = ({ code, codeName }) => {
    if (!code) return;
    return <span className="bar">{codeName}</span>;
  };

  return (
    <>
      <ListHeader
        list={listHeader}
        onClickSort={onClickSort}
        sortDesc={sortDesc}
        sortItem={sortItem}
      />
      <tbody>
        {totalCount && totalCount > 0 ? (
          <>
            {datas.map((data, index) => (
              <tr
                key={`table-tr-${index}`}
                onClick={() => onClickRow(data.inqId)}
              >
                <td>{totalCount - ((currentPage - 1) * PAGE_SIZE + index)}</td>
                <td>{data.regDtsStr}</td>
                <td>{data.cmpNm}</td>
                <td className="left">
                  <DevelopCode code={data.inqCd} codeName={data.inqCdNm} />
                </td>
                <td>{data.inqScdDts}</td>
              </tr>
            ))}
          </>
        ) : (
          <>
            {!loader && (
              <NoSearchData
                colspan={listHeader.length}
                message={
                  searchFlag ? "검색 결과가 없습니다." : "정보가 없습니다."
                }
              />
            )}
          </>
        )}
      </tbody>
    </>
  );
};

export default InquiryList;
