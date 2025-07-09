import DetailInfoSection from "component/admin/common/DetailInfoSection";
import { modalImageView } from "util/common";

const WorkDetailKo = (props) => {
  const { detailInfo } = props;
  return (
    <DetailInfoSection title={"프로젝트 정보(한글)"}>
      <tr>
        <th>프로젝트명</th>
        <td>{detailInfo?.workNm}</td>
        <th>프로젝트 수행일</th>
        <td>{detailInfo?.workDts}</td>
      </tr>
      <tr>
        <th>클라이언트</th>
        <td colSpan={3}>{detailInfo?.workCli}</td>
      </tr>
      <tr>
        <th>프로젝트 내용</th>
        <td
          colSpan={3}
          dangerouslySetInnerHTML={{
            __html: detailInfo?.workCntt.replace(/\n/g, "<br>"),
          }}
        />
      </tr>
      <tr>
        <th>
          프로젝트
          <br />
          대표이미지
        </th>
        <td>
          <img
            src={`${process.env.REACT_APP_IMG_URL}${detailInfo?.workImgPath}`}
            alt={detailInfo?.workNm}
            className="thumbnail"
          />
        </td>
        <th>
          프로젝트
          <br />
          상세이미지
        </th>
        <td>
          {detailInfo?.workFileList.length > 0 && (
            <>
              {detailInfo?.workFileList.map((img, index) => (
                <img
                  src={`${process.env.REACT_APP_IMG_URL}${img.workFileImgPath}`}
                  alt={img.workFileImgNm}
                  key={`work-detail-img-en-${index}`}
                  onClick={() => modalImageView(img.workFileImgPath)}
                />
              ))}
            </>
          )}
        </td>
      </tr>
    </DetailInfoSection>
  );
};

export default WorkDetailKo;
