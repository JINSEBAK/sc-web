import DetailInfoSection from "component/admin/common/DetailInfoSection";

const InquiryDevelope = (props) => {
  const { inqDetails } = props;
  return (
    <DetailInfoSection title={"개발 항목"}>
      <tr>
        <th>프로젝트 형태</th>
        <td>{inqDetails?.inqCdNm}</td>
        <th>개발 항목</th>
        <td>{inqDetails?.inqDevelopCdNm}</td>
      </tr>
    </DetailInfoSection>
  );
};

export default InquiryDevelope;
