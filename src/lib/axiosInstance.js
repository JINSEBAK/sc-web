import axios from "axios";
import { modalAlert } from "util/common";
import { RESULT } from "./common";

/**
 * 일반 api용
 */
export const header = {
  "Content-type": "application/json; charset=UTF-8",
};

/**
 * 파일 첨부용
 */
export const multipartHeader = {
  "Content-type": "multipart/form-data; charset=UTF-8",
};

export const smcoreInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

export const smcoreAdminInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

/**
 * 요청 인터셉터 (사용자)
 */
smcoreInstance.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전 수행
    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

/**
 * 응답 인터셉터 (사용자)
 */
smcoreInstance.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 요청 인터셉터 (관리자)
 */
smcoreAdminInstance.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전 수행
    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

/**
 * 응답 인터셉터 (관리자)
 */
smcoreAdminInstance.interceptors.response.use(
  (response) => {
    const res = response.data;
    // 세션 만료 시 로그인 화면으로 이동
    if (res.resultCode === RESULT.FAIL_SESSION) {
      modalAlert({
        message: res.resultMsg,
        onConfirm: () => {
          window.location.replace("/admin");
        },
      });
    } else {
      return res;
    }
  },
  (error) => {
    modalAlert({
      title: error.name,
      message: error.message,
    });
    return Promise.reject(error);
  }
);
