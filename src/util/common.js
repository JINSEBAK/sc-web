import { confirmAlert } from "react-confirm-alert";
import { Alert, Confirm } from "component/common/ModalAlertConfirm";
import ModalImageView from "component/admin/common/ModalImageView";
import ProjectDetailModal from "component/views/project/contents/ProjectDetailModal";

/**
 * 단방향 메세지 안내 모달팝업(alert)
 */
export const modalAlert = (props) => {
  const { title, message, onConfirm } = props;
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <Alert
          title={title}
          message={message}
          onClose={onClose}
          onConfirm={onConfirm}
        />
      );
    },
    closeOnEscape: false,
    closeOnClickOutside: false
  });
};

/**
 * 사용자 상호작용 있는 모달팝업(confirm)
 */
export const modalConfirm = (props) => {
  const { title, message, onConfirm } = props;
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <Confirm
          title={title}
          message={message}
          onClose={onClose}
          onConfirm={onConfirm}
        />
      );
    },
    closeOnEscape: false,
    closeOnClickOutside: false
  });
};

/**
 * 어드민 > 첨부 이미지 크게 보기
 * @param {} imagePath 크게보기할 이미지 경로
 */
export const modalImageView = (imagePath) => {
  if (!imagePath) return;
  confirmAlert({
    customUI: ({ onClose }) => {
      return <ModalImageView onClose={onClose} imagePath={imagePath} />;
    }
  });
};

export const modalFullDetail = (workId) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return <ProjectDetailModal onClose={onClose} workId={workId} />;
    }
  });
};
/**
 *
 * @param {*} str input, textarea 입력값
 * 문자열의 공백을 제거한 length 반환
 * input, textarea의 공백만 입력방지용
 */
export const blankIncluded = (str) => {
  const blankRegExp = /^\s+|\s+$/g;
  return str.replace(blankRegExp, "").length;
};

/**
 * 날짜 오프젝트 데이터 포멧 변경하기 (yyyy-MM-dd)
 * @param {*} date 날짜 오브젝트
 */
export const dateFormat = (date) => {
  if (!date) return;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

/**
 * 기간 검색 시 시작일, 종료일 비교
 * @param {*} startDt 시작일
 * @param {*} endDt 종료일
 */
export const compareDates = (startDt, endDt) => {
  if (!startDt || !endDt) return true;
  if (startDt > endDt) {
    modalAlert({
      title: "",
      message: "종료일은 시작일보다 빠를 수 없습니다."
    });
    return false;
  }
};

/**
 * 전화번호에 하이픈 추가하기
 * @param {*} str 하이픈이 없는 전화번호
 */
export const telFormat = (str) => {
  if (!str) return;
  return str
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
};
/**
 * 문자열에서 특정 문구 추출하여 강조처리하기
 * @param {*} target 추출 대상 원문
 * @param {*} keyword 추출 키워드
 */
export const highLighter = (target, keyword) => {
  if (!target) return;
  return target.replace(keyword, `<em>${keyword}</em>`);
};

/**
 * 팝업 여부 체크
 * 팝업 오픈 시 윈도우 스크롤 방지
 */
export const popupOpenCheck = () => {
  const isPopup = document.querySelector("#react-confirm-alert");
  if (isPopup) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
};

/**
 * yyyy-MM-dd to date object
 * @param {*} str yyyy-MM-dd 형태의 date string
 */
export const toDateObject = (str) => {
  if (!str) return;
  const year = str.substring(0, 4);
  const month = str.substring(5, 7);
  const date = str.substring(8, 10);

  return new Date(year, month - 1, date);
};

/**
 * 숫자 세자리마다 콤마 추가
 */
export const comma = (value) => {
  if (typeof value !== "number" && typeof value !== "string") return "";
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
