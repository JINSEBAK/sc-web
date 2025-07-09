import { smcoreAdminInstance, header } from "./axiosInstance";
import axios from "axios";

/**
 * Admin
 * 로그인
 */
export const postLoginAdmin = async (data) => {
  const res = await smcoreAdminInstance({
    headers: header,
    method: "POST",
    url: "/smcore/bo/loginAdmin",
    data: data,
    withCredentials: true,
  });
  return res;
};

/**
 * Admin
 * 로그아웃
 */
export const postLogoutAdmin = async () => {
  const res = await smcoreAdminInstance({
    headers: header,
    method: "POST",
    url: "/smcore/bo/logoutAdmin",
    withCredentials: true,
  });
  return res;
};

/**
 * Admin > Work
 * 포트폴리오 목록 조회
 */
export const getListWork = async (params) => {
  const res = await smcoreAdminInstance({
    headers: header,
    method: "GET",
    url: "/smcore/bo/listWork",
    params: params,
    withCredentials: true,
  });

  return res;
};

/**
 * Admin > Work
 * 포트폴리오 상세 조회
 */
export const getDetailWork = async (workId) => {
  const res = await smcoreAdminInstance({
    headers: header,
    method: "GET",
    url: "/smcore/bo/detailWork",
    withCredentials: true,
    params: {
      workId: workId,
    },
  });
  return res;
};

/**
 * Admin > Work
 * 포트폴리오 등록
 */
export const postInsertWork = async (data) => {
  const res = await smcoreAdminInstance({
    headers: header,
    method: "POST",
    url: "/smcore/bo/insertWork",
    data: data,
    withCredentials: true,
  });
  return res;
};

/**
 * Admin > Work
 * 포트폴리오 수정
 */
export const postUpdateWork = async (data) => {
  const res = await smcoreAdminInstance({
    headers: header,
    method: "POST",
    url: "/smcore/bo/updateWork",
    data: data,
    withCredentials: true,
  });
  return res;
};

/**
 * Admin > Work
 * 포트폴리오 삭제
 * @param {workId} 프로젝트 아이디
 */
export const postDeleteWork = async (data) => {
  const res = await smcoreAdminInstance({
    headers: header,
    method: "POST",
    url: "/smcore/bo/deleteWork",
    data: data,
    withCredentials: true,
  });
  return res;
};

/**
 * Admin > Inquiry
 * 프로젝트 문의 목록
 */

export const getListInq = async (params) => {
  const res = await smcoreAdminInstance({
    headers: header,
    method: "GET",
    url: "/smcore/bo/listInq",
    params: params,
    withCredentials: true,
  });
  return res;
};

/**
 * Admin > Inquiry
 * 프로젝트 문의 상세 조회
 * @param {*} inqId 문의 아이디
 */
export const getDetailInq = async (inqId) => {
  const res = await smcoreAdminInstance({
    headers: header,
    method: "GET",
    url: "/smcore/bo/detailInq",
    params: {
      inqId: inqId,
    },
    withCredentials: true,
  });
  return res;
};

/**
 * Admin > Inquiry detail
 * 프로젝트 문의 상세 조회 > 첨부파일 다운로드
 * @param {*} inqId 문의 아이디
 * @param {*} inqFileNm 첨부파일명
 */
export const getFileDownload = async (inqId, inqFileNm) => {
  const res = await smcoreAdminInstance({
    headers: header,
    method: "GET",
    url: "/smcore/bo/download",
    params: {
      inqId: inqId,
      inqFileNm: inqFileNm,
    },
    withCredentials: true,
    //responseType: "blob",
  });
  console.log(res);
  return res;
};

/**
 * Admin  > Inquiry detail
 * 프로젝트 문의 상세 조회 > 첨부파일 다운로드
 * axios instance 사용 시 response data 타입이 달라서 파일 다운로드 불가
 * @param {*} inqId 문의 아이디
 * @param {*} inqFileNm 첨부파일명
 */

export const getAttachFile = async (inqId, inqFileNm) => {
  axios({
    headers: header,
    method: "GET",
    url: `${process.env.REACT_APP_API_URL}/smcore/bo/download`,
    params: {
      inqId: inqId,
      inqFileNm: inqFileNm,
    },
    responseType: "blob",
    withCredentials: true,
  }).then((response) => {
    const blob = new Blob([response.data]);
    const fileObjectUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = fileObjectUrl;
    link.style.display = "none";

    const injectFileNm = (response) => {
      const disposition = response.headers["content-disposition"];
      const fileName = decodeURI(
        disposition
          .match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1]
          .replace(/['"]/g, "")
      );
      return fileName;
    };
    link.download = injectFileNm(response);

    document.body.appendChild(link);
    link.click();
    link.remove();
  });
};

/**
 * Admin > Account register
 * 관리자 계정 추가 등록
 * @param {*} data { adminId: 관리자 아이디, adminPw: 관리자 비밀번호 }
 */

export const postAdminUserSignup = async (data) => {
  const res = await smcoreAdminInstance({
    headers: header,
    method: "POST",
    url: "/smcore/bo/userSignup",
    data: data,
    withCredentials: true,
  });
  return res;
};
