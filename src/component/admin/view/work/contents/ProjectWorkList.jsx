import ListHeader from "component/admin/common/ListHeader";
import NoSearchData from "component/admin/common/NoSearchData";
import { PAGE_SIZE } from "component/admin/datas/constant";
import { highLighter } from "util/common";

const ProjectWorkList = (props) => {
  //
  const {
    totalCount,
    listHeader,
    datas,
    onClickSort,
    sortDesc,
    sortItem,
    searchFlag,
    onClickList,
    currentPage,
    keyword,
    loader,
  } = props;
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
            {datas.map((data, index) => {
              return (
                <tr
                  key={`work-${data.workId}`}
                  onClick={() => onClickList(data.workId)}
                >
                  <td>
                    {totalCount - ((currentPage - 1) * PAGE_SIZE + index)}
                  </td>
                  <td>{data.workDts}</td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: highLighter(data.workNm, keyword),
                    }}
                  />
                  <td data-category={data.workCd}>{data.workCdNm}</td>
                  <td>{data.modDts}</td>
                  <td>{data.modId}</td>
                </tr>
              );
            })}
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

export default ProjectWorkList;
