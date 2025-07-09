import { smcoreInstance, header, multipartHeader } from "./axiosInstance";

/**
 * location: common
 * description: 공통 코드(all)
 */
export const getListAllCommCd = async () => {
  const res = await smcoreInstance({
    headers: header,
    method: "GET",
    url: "/smcore/cm/listAllCommcd",
  });
  return res;
};

/**
 * location: common
 * description: 공통코드 상세 조회
 */
export const getListCommCd = async (pId) => {
  const res = await smcoreInstance({
    headers: header,
    method: "GET",
    url: "/smcore/cm/listCommcd",
    params: {
      commcdParentId: pId,
    },
  });
  return res;
};

/**
 * location: project
 * descrition: 포트폴리오 목록(list)
 */
export const getListWork = async (params) => {
  const res = await smcoreInstance({
    headers: header,
    method: "GET",
    url: "/smcore/home/listWork",
    params: params,
  });
  return res;
};

/**
 * location: project
 * description: 포트폴리오 상세(detail)
 */
export const getDetailWork = async (wId) => {
  const res = await smcoreInstance({
    headers: header,
    method: "GET",
    url: "/smcore/home/detailWork",
    params: {
      workId: wId,
    },
  });
  return res;
};

/**
 * location: inquiry
 * description: 문의등록
 */
export const postInsertInq = async (data) => {
  const res = await smcoreInstance({
    //headers: multipartHeader,
    headers: header,
    method: "POST",
    url: "/smcore/home/insertInq",
    data: data,
  });
  return res;
};
