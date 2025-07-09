import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import MainContainer from "component/admin/common/AdminMainContainer";
import InquiryProjectDetails from "./contents/InquiryProjectDetails";
import InquiryBaseInfo from "./contents/InquiryBaseInfo";
import InquiryDevelope from "./contents/InquiryDevelope";
import { ButtonGroup, Button } from "component/admin/common/Items";
import { getDetailInq, getAttachFile, getAttachFileHidden } from "lib/adminApi";
import { RESULT } from "lib/common";
import { useState } from "react";

const AdminInquiryDetailContainer = () => {
  //
  const { inqId } = useParams();
  const navigate = useNavigate();

  const [inqDetails, setInqDetails] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // api 호출
    setLoader(true);
    getDetailInq(inqId).then((data) => {
      setLoader(false);
      if (data.resultCode === RESULT.SUCCESS) {
        setInqDetails(data.resultData);
      }
    });
  }, [inqId]);

  // 첨부파일 다운로드
  const onClickFile = (inqId, inqFileNm) => {
    if (!inqId && !inqFileNm) return;
    getAttachFile(inqId, inqFileNm);
  };

  const onClickList = () => {
    navigate("/admin/inquiry/list");
  };

  return (
    <MainContainer name="inquiry" loader={loader}>
      <InquiryDevelope inqDetails={inqDetails} />
      <InquiryProjectDetails
        inqDetails={inqDetails}
        onClickFile={onClickFile}
      />
      <InquiryBaseInfo inqDetails={inqDetails} />
      <ButtonGroup away>
        <Button name="목록" onClick={onClickList} />
      </ButtonGroup>
    </MainContainer>
  );
};

export default AdminInquiryDetailContainer;
