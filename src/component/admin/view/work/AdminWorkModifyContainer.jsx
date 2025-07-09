import { useState } from "react";
import MainContainer from "component/admin/common/AdminMainContainer";
import { ButtonGroup, Button, Loader } from "component/admin/common/Items";
import {
  modalConfirm,
  modalAlert,
  dateFormat,
  toDateObject,
} from "util/common";

import WorkFormKo from "./contents/WorkFormKo";
import { useEffect } from "react";
import { FILE_MAX_SIZE } from "component/admin/datas/constant";
import WorkFormEn from "./contents/WorkFormEn";
import { RESULT } from "lib/common";
import { getDetailWork, postUpdateWork } from "lib/adminApi";
import { useParams, useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

const initParams = {
  workCd: "",
  workNm: "",
  workCli: "",
  workCntt: "",
  workNmEng: "",
  workCliEng: "",
  workCnttEng: "",
  workDts: "",
  mainImg: null,
  subImg: null,
  mainImgEng: null,
  subImgEng: null,
};

const initValidation = {
  workCd: "",
  workNm: "",
  workCli: "",
  workCntt: "",
  workNmEng: "",
  workCliEng: "",
  workCnttEng: "",
  workDts: "",
};

/**
 * 프로젝트 등록/수정 동일 화면에서 진행
 * workId parameter가 있는 경우는 수정 모드
 */
const AdminWorkModifyContainer = () => {
  //
  const navigate = useNavigate();
  const { workId } = useParams();

  const [disabled, setDisabled] = useState(true);
  const [params, setParams] = useState(initParams);
  const [loader, setLoader] = useState(false);

  const [fileName, setFileName] = useState({
    mainImg: "",
    subImg: "",
    mainImgEng: "",
    subImgEng: "",
  });
  const [filePath, setFilePath] = useState({
    mainImg: "",
    subImg: "",
    mainImgEng: "",
    subImgEng: "",
  });

  useEffect(() => {
    return () => {
      setFilePath({
        mainImg: "",
        subImg: "",
        mainImgEng: "",
        subImgEng: "",
      });
    };
  }, []);

  useLayoutEffect(() => {
    // workId가 있는 경우는 수정 모드
    if (!workId) return;
    getDetailWork(workId).then((data) => {
      if (data.resultCode === RESULT.SUCCESS) {
        const res = data.resultData;
        setParams({
          workCd: res.workCd,
          workNm: res.workNm,
          workCli: res.workCli,
          workCntt: res.workCntt,
          workNmEng: res.workNmEng,
          workCliEng: res.workCliEng,
          workCnttEng: res.workCnttEng,
          workDts: toDateObject(res.workDts),
        });
        setFilePath({
          mainImg: res.workImgPath,
          mainImgEng: res.workImgPathEng,
          subImg:
            res.workFileList.length > 0
              ? res.workFileList[0].workFileImgPath
              : null,
          subImgEng:
            res.workFileListEng.length > 0
              ? res.workFileListEng[0].workFileImgPath
              : null,
        });

        // original data backup
      }
    });
  }, [workId]);

  useEffect(() => {
    // disabled 처리
    let checked = false;
    Object.keys(params).map((key) => {
      switch (key) {
        default: {
          checked = params[key] ? true : false;
          break;
        }
      }
      if (initValidation.hasOwnProperty(key)) {
        initValidation[key] = checked;
      }
    });

    const allTrue = Object.values(initValidation).every((value) => value);
    setDisabled(!allTrue);
  }, [params]);

  // basic input
  const onChangeValue = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  // datepicker
  const onChangeDate = (date) => {
    if (!date) return;
    setParams({ ...params, workDts: date });
  };

  // input file
  const onChangeFile = (e) => {
    const file = e.target.files[0];
    if (file.size > FILE_MAX_SIZE) {
      modalAlert({
        title: "",
        message: "파일은 10MB 이하로만 등록가능합니다.",
      });
      return;
    }

    setParams({ ...params, [e.target.name]: file });

    // state 관리
    // 미리보기용 이미지 생성
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFilePath({ ...filePath, [e.target.name]: reader.result });
    };
    setFileName({ ...fileName, [e.target.name]: file.name });
  };

  // 등록, 수정
  const onClickRegister = () => {
    modalConfirm({
      title: "",
      message: "입력하신 내용으로 수정하시겠습니까?",
      onConfirm: () => {
        setLoader(true);
        // json > form data로 convert
        const frm = new FormData();
        for (let key in params) {
          //
          let value = params[key];
          switch (key) {
            case "workDts":
              // format 변경
              value = dateFormat(value);
              break;
            case ("subImg", "subImgEng"):
              break;
            default:
              value = params[key];
              break;
          }
          if (value) {
            frm.append(key, value);
          }
        }

        // 수정
        frm.append("workId", workId); // 수정 게시물 아이디

        postUpdateWork(frm).then((data) => {
          setLoader(false);
          if (data.resultCode === RESULT.SUCCESS) {
            modalAlert({
              title: "",
              message: "프로젝트가 수정되었습니다.",
              onConfirm: () => {
                navigate(`/admin/works/${workId}`, { replace: true });
              },
            });
          } else {
            modalAlert({
              title: "",
              message: data.resultMsg,
            });
          }
        });
      },
    });
  };

  const onClickCancel = () => {
    navigate("/admin/works/list");
  };

  return (
    <MainContainer name="work">
      {loader && <Loader />}
      {/* Korean */}
      <WorkFormKo
        params={params}
        onChangeValue={onChangeValue}
        onChangeDate={onChangeDate}
        onChangeFile={onChangeFile}
        fileName={fileName}
        filePath={filePath}
        workId={workId}
      />
      {/* English */}
      <WorkFormEn
        params={params}
        onChangeValue={onChangeValue}
        onChangeDate={onChangeDate}
        onChangeFile={onChangeFile}
        fileName={fileName}
        filePath={filePath}
        workId={workId}
      />
      <ButtonGroup right>
        <Button name="취소" onClick={onClickCancel} />
        <Button
          name={"수정"}
          primary
          disabled={disabled}
          onClick={onClickRegister}
        />
      </ButtonGroup>
    </MainContainer>
  );
};

export default AdminWorkModifyContainer;
