import { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "component/common/Icon";
import { getDetailWork } from "lib/api";
import { RESULT } from "lib/common";
import ProjectInfo from "./ProjectInfo";
import ProjectDetailImages from "./ProjectDetailImages";

const ProjectDetailModal = (props) => {
  const { onClose, workId } = props;
  const language = localStorage.getItem("lang");
  const [detailInfo, setDetailInfo] = useState();

  useEffect(() => {
    if (!workId) return;
    getDetailWork(workId).then((data) => {
      if (data.resultCode === RESULT.SUCCESS) {
        setDetailInfo(data.resultData);
      }
    });
  }, [workId]);

  return (
    <StyledFullDetail>
      <div className="inner">
        <button onClick={onClose}>
          <Icon name="close" />
        </button>
        <ProjectInfo detailInfo={detailInfo} />
        <ProjectDetailImages
          imageList={
            language === "ko"
              ? detailInfo?.workFileList ?? []
              : detailInfo?.workFileListEng ?? []
          }
        />
      </div>
    </StyledFullDetail>
  );
};

export default ProjectDetailModal;

const StyledFullDetail = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  padding: 150px 0;

  .inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0;
    > button {
      position: fixed;
      width: 60px;
      height: 60px;
      top: 60px;
      right: calc((100% - 1280px) / 2);
      z-index: 1010;
      cursor: pointer;
      background-color: transparent;
      border: none;
      padding: 0;
      span {
        width: 100%;
        height: 100%;
      }
    }
  }
  //   공통레이아웃 바깥에 팝업 dom이 생겨 theme 사용 불가
  @media (max-width: 1280px) {
    .inner {
      > button {
        right: 3.75rem;
      }
    }
    .inner {
      padding: 0 3.75rem;
    }
  }
  @media (max-width: 768px) {
    padding: 90px 0;
    .inner {
      padding: 0;
      > button {
        right: 20px;
        top: 20px;
        width: 40px;
        height: 40px;
        i {
          background-size: 100%;
        }
      }
    }
  }
`;
