import DetailInfoSection from "component/admin/common/DetailInfoSection";
import SearchItem from "component/admin/common/SearchItem";
import {
  TextBox,
  FileAttachment,
  FileAttachGuide,
} from "component/admin/common/Items";

const WorkFormEn = (props) => {
  // workId 값이 있는 경우 수정 모드
  const { params, onChangeValue, onChangeFile, fileName, filePath, workId } =
    props;
  return (
    <DetailInfoSection title={"프로젝트 정보(영문)"} className="register">
      <tr>
        <th className="req">프로젝트명</th>
        <td>
          <SearchItem
            type="text"
            placeholder="프로젝트명"
            name="workNmEng"
            value={params["workNmEng"]}
            onChangeItem={(e) => onChangeValue(e)}
          />
        </td>
        <th className="req">클라이언트</th>
        <td colSpan={3}>
          <SearchItem
            type="text"
            placeholder="클라이언트"
            name="workCliEng"
            value={params["workCliEng"]}
            onChangeItem={(e) => onChangeValue(e)}
          />
        </td>
      </tr>
      <tr>
        <th className="req">프로젝트 내용</th>
        <td colSpan={3}>
          <TextBox
            placeholder="50자내 입력"
            name="workCnttEng"
            value={params["workCnttEng"]}
            onChangeItem={(e) => onChangeValue(e)}
          />
        </td>
      </tr>
      <tr>
        <th className="req">
          프로젝트
          <br />
          대표이미지
        </th>
        <td>
          <FileAttachment
            name="mainImgEng"
            id="mainImgEng"
            fileName={fileName["mainImgEng"]}
            onChangeFile={(e) => onChangeFile(e)}
          />
          <FileAttachGuide
            text={[
              "이미지 사이즈 720px * 500px",
              "이미지 형식 jpg,png,gif 가능",
              "최대 용량 10MB 이하로 이미지를 등록해주세요.",
            ]}
          />
          {filePath["mainImgEng"] && (
            <div className="preview">
              <img
                src={
                  workId
                    ? filePath["mainImgEng"].indexOf("base64") > -1
                      ? filePath["mainImgEng"]
                      : `${process.env.REACT_APP_IMG_URL}${filePath["mainImgEng"]}`
                    : filePath["mainImgEng"]
                }
                alt={"영어로 작성된 프로젝트 대표 이미지"}
              />
            </div>
          )}
        </td>
        <th className="req">
          프로젝트
          <br />
          상세이미지
        </th>
        <td>
          <FileAttachment
            name="subImgEng"
            id="subImgEng"
            fileName={fileName["subImgEng"]}
            onChangeFile={(e) => onChangeFile(e)}
            multiple
          />
          <FileAttachGuide
            text={[
              "이미지 사이즈 가로 1080px 이내",
              "이미지 형식 jpg,png,gif 가능",
              "최대 용량 10MB 이하로 이미지를 등록해주세요.",
            ]}
          />
          {filePath["subImgEng"] && (
            <div className="preview">
              <img
                src={
                  workId
                    ? filePath["subImgEng"].indexOf("base64") > -1
                      ? filePath["subImgEng"]
                      : `${process.env.REACT_APP_IMG_URL}${filePath["subImgEng"]}`
                    : filePath["subImgEng"]
                }
                className="sub-img"
                alt={"영어로 작성된 프로젝트 서브 이미지"}
              />
            </div>
          )}
        </td>
      </tr>
    </DetailInfoSection>
  );
};

export default WorkFormEn;
