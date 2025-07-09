import DetailInfoSection from "component/admin/common/DetailInfoSection";
import { telFormat } from "util/common";

const InquiryBaseInfo = (props) => {
  const { inqDetails } = props;
  return (
    <DetailInfoSection title={"기본 정보"}>
      <tr>
        <th>회사명</th>
        <td>{inqDetails?.cmpNm}</td>
        <th>이름/직위</th>
        <td>{inqDetails?.cmpWriter}</td>
      </tr>
      <tr>
        <th>전화번호</th>
        <td>{inqDetails?.cmpTel && telFormat(inqDetails?.cmpTel)}</td>
        <th>이메일</th>
        <td>{inqDetails?.cmpEmail}</td>
      </tr>
    </DetailInfoSection>
  );
};

export default InquiryBaseInfo;
