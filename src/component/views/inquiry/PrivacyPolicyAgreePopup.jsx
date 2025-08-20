import ImageItem from "component/common/atoms/ImageItem";
import styles from "./Inquiry.module.css";
import classNames from "classnames";

const PrivacyPolicyAgreePopup = ({ show, onClose }) => {
  return (
    <div
      className={classNames(styles["terms-backdrop"], { [styles.show]: show })}
    >
      <div className={styles.terms}>
        <button type="button" className={styles["b-close"]} onClick={onClose}>
          <ImageItem imgFile={"icon_close.svg"} />
        </button>
        <div className={styles.inner}>
          <h3>개인정보 처리방침</h3>
          <div>
            <p>‘스마트코어’의 개인정보 처리방침은 다음과 같습니다.</p>
          </div>
          <div>
            <strong>개인정보 수집이용에 대한 동의</strong>
            <p>
              고객님의 소중한 개인정보는 다음과 같은 정책에 따라 수집 및
              이용됩니다. 스마트코어에서는 해당 목적에 연관되는 개인정보만을
              수집하며, 수집된 정보를 투명하고 안전하게 보호, 관리할 것을 약속
              드립니다.
            </p>
          </div>
          <div>
            <strong>개인정보의 수집.이용 목적</strong>
            <p>
              프로젝트 의뢰하고자 하는 이용자에 대한 확인 및 의뢰건에 대한
              정확한 답변(견적, 기간, 개발 등)을 위해 수집됩니다.
            </p>
          </div>
          <div>
            <strong>수집 항목</strong>
            <p>
              -프로젝트 의뢰정보, 첨부파일, 담당자정보(회사명, 이름/직위,
              전화번호, 이메일)
            </p>
            <p>-개인정보 수집방법 : 홈페이지( Request)를 통한 정보 입력</p>
            <p>보유 이용 기간</p>
            <p>
              - 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에 해당 정보를
              지체없이 파기합니다. 단, 다음 정보에 대해서 아래 이유로 명시한
              기간 동안 보존합니다.
            </p>
            <p>
              - 보존 이유: Request 후 6개월 내, 프로젝트 계약시 진행 종료 시
              까지 유지 후 파기
            </p>
          </div>
          <div>
            <strong>동의를 거부할 권리 및 동의를 거부할 경우</strong>
            <p>
              필수 정보의 수집,이용에 관한 동의는 문의에 대한 답변 및 상담을
              위해 필수적이므로, 동의 시에만 문의에 대한 답변이 가능합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyAgreePopup;
