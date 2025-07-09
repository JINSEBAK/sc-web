import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainContainer from "component/admin/common/AdminMainContainer";
import WorkDetailKo from "./contents/WorkDetailKo";
import WorkDetailEn from "./contents/WorkDetailEn";
import { getDetailWork, postDeleteWork } from "lib/adminApi";
import { ButtonGroup, Button } from "component/admin/common/Items";
import { RESULT } from "lib/common";
import { modalConfirm, modalAlert } from "util/common";

const AdminWorkDetailContainer = () => {
  //
  const { workId } = useParams();
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  const [detailInfo, setDetailInfo] = useState();

  useEffect(() => {
    setLoader(true);
    getDetailWork(workId).then((data) => {
      setLoader(false);
      if (data.resultCode === RESULT.SUCCESS) {
        setDetailInfo(data.resultData);
      }
    });
  }, [workId]);

  const onClickList = () => {
    navigate("/admin/works");
  };

  // 수정
  const onClickModify = () => {
    navigate(`/admin/works/modify/${workId}`);
  };

  // 삭제
  const onClickDelete = () => {
    modalConfirm({
      message: "프로젝트를 삭제하시겠습니까?",
      onConfirm: () => {
        const frm = new FormData();
        frm.append("workId", workId);

        postDeleteWork(frm).then((data) => {
          if (data.resultCode === RESULT.SUCCESS) {
            modalAlert({
              message: "삭제되었습니다.",
              onConfirm: () => {
                navigate(`/admin/works`, { replace: true });
              },
            });
          } else {
            modalAlert({
              message: "잠시 후 다시 시도해주세요.",
            });
          }
        });
      },
    });
  };

  return (
    <MainContainer name="work" loader={loader}>
      <WorkDetailKo detailInfo={detailInfo} />
      <WorkDetailEn detailInfo={detailInfo} />
      <ButtonGroup right>
        <Button
          name="목록"
          onClick={onClickList}
          style={{ marginRight: "auto" }}
        />
        <Button name="삭제" primary onClick={onClickDelete} />
        <Button name="수정" primary onClick={onClickModify} />
      </ButtonGroup>
    </MainContainer>
  );
};

export default AdminWorkDetailContainer;
