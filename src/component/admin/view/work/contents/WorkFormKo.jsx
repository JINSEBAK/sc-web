import { useContext, useEffect, useState } from "react";
import { CodeContext } from "store/CodeStore";
import { COMMON_CODE } from "lib/common";

import DetailInfoSection from "component/admin/common/DetailInfoSection";
import SearchItem from "component/admin/common/SearchItem";
import {
  TextBox,
  FileAttachment,
  SingleDatepicker,
  FileAttachGuide,
  SelectBox,
} from "component/admin/common/Items";

const WorkFormKo = (props) => {
  const {
    params,
    onChangeValue,
    onChangeDate,
    onChangeFile,
    fileName,
    filePath,
    workId,
  } = props;

  const CODES = useContext(CodeContext);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const tmp = CODES.filter((code) => {
      return code.commcdParentId === COMMON_CODE.WORK;
    });
    if (tmp.length > 0) {
      setOptions(tmp);
    }
  }, [CODES]);

  return (
    <DetailInfoSection title={"프로젝트 정보(한글)"} className="register">
      <tr>
        <th className="req">프로젝트명</th>
        <td>
          <SearchItem
            type="text"
            placeholder="프로젝트명"
            name="workNm"
            value={params["workNm"]}
            onChangeItem={(e) => onChangeValue(e)}
          />
        </td>
        <th className="req">프로젝트 수행일</th>
        <td>
          <SingleDatepicker
            name="workDts"
            onChangeDate={onChangeDate}
            selected={params["workDts"]}
            //selected={toDateObject(params["workDts"])}
          />
        </td>
      </tr>
      <tr>
        <th className="req">클라이언트</th>
        <td>
          <SearchItem
            type="text"
            placeholder="클라이언트"
            name="workCli"
            value={params["workCli"]}
            onChangeItem={(e) => onChangeValue(e)}
          />
        </td>
        <th className="req">구분</th>
        <td>
          <SelectBox
            options={options}
            name="workCd"
            value={params["workCd"]}
            onChangeItem={(e) => onChangeValue(e)}
          />
        </td>
      </tr>
      <tr>
        <th className="req">프로젝트 내용</th>
        <td colSpan={3}>
          <TextBox
            placeholder="50자내 입력"
            name="workCntt"
            value={params["workCntt"]}
            maxLength={50}
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
            name="mainImg"
            id="mainImg"
            fileName={fileName["mainImg"]}
            onChangeFile={(e) => onChangeFile(e)}
          />
          <FileAttachGuide
            text={[
              "이미지 사이즈 720px * 500px",
              "이미지 형식 jpg,png,gif 가능",
              "최대 용량 10MB 이하로 이미지를 등록해주세요.",
            ]}
          />
          {filePath["mainImg"] && (
            <div className="preview">
              <img
                src={
                  workId
                    ? filePath["mainImg"].indexOf("base64") > -1
                      ? filePath["mainImg"]
                      : `${process.env.REACT_APP_IMG_URL}${filePath["mainImg"]}`
                    : filePath["mainImg"]
                }
                alt={"한국어로 작성된 프로젝트 대표 이미지"}
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
            name="subImg"
            id="subImg"
            fileName={fileName["subImg"]}
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
          {filePath["subImg"] && (
            <div className="preview">
              <img
                src={
                  workId
                    ? filePath["subImg"].indexOf("base64") > -1
                      ? filePath["subImg"]
                      : `${process.env.REACT_APP_IMG_URL}${filePath["subImg"]}`
                    : filePath["subImg"]
                }
                className="sub-img"
                alt={"한국어로 작성된 프로젝트 상세 이미지"}
              />
            </div>
          )}
        </td>
      </tr>
    </DetailInfoSection>
  );
};

export default WorkFormKo;
