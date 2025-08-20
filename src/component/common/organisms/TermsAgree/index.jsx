import styles from "./TermsAgree.module.css";

import PrivacyPolicyAgreePopup from "component/views/inquiry/PrivacyPolicyAgreePopup";
import Checkbox from "component/common/atoms/Checkbox";
import { useEffect, useState } from "react";

const TermsAgree = () => {
  //
  const [show, setShow] = useState(false);

  const onChangeAgree = (status) => {
    console.log(status);
  };

  useEffect(() => {
    // body scroll
    document.body.style.overflow = show ? "hidden" : "auto";
  }, [show]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.agree}>
          <Checkbox label="" onChange={onChangeAgree} />
          <span className={styles.text}>
            <em onClick={() => setShow(true)}>개인정보 처리방침</em>에
            동의합니다.(필수)
          </span>
        </div>
      </div>
      {/* 정책 팝업 */}
      <PrivacyPolicyAgreePopup show={show} onClose={() => setShow(false)} />
    </>
  );
};

export default TermsAgree;
