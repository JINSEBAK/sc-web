import DetailInfoSection from "component/admin/common/DetailInfoSection";
import Button from "component/common/Button";

const InquiryProjectDetails = (props) => {
  const { inqDetails, onClickFile } = props;

  return (
    <DetailInfoSection title={"프로젝트 상세"}>
      <tr>
        <th>프로젝트 기간</th>
        <td>{inqDetails?.inqPeriod}</td>
        <th>오픈예정일</th>
        <td>{inqDetails?.inqScdDts}</td>
      </tr>
      <tr>
        <th>첨부파일</th>
        <td colSpan={3}>
          {inqDetails?.inqFileNm && (
            <Button
              className="download"
              text={inqDetails?.inqFileNm}
              onClickButton={() =>
                onClickFile(inqDetails?.inqId, inqDetails?.inqFileNm)
              }
            />
          )}
        </td>
      </tr>
      <tr>
        <th>상세내용</th>
        <td colSpan={3}>
          <div
            className="scroll"
            dangerouslySetInnerHTML={{
              __html: inqDetails?.inqCntt.replace(/\n/g, "<br/>"),
            }}
          />
        </td>
      </tr>
    </DetailInfoSection>
  );
};

export default InquiryProjectDetails;
