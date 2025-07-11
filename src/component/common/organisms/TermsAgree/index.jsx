import styles from "./TermsAgree.module.css";

import Checkbox from "component/common/atoms/Checkbox";

const TermsAgree = () => {
  return (
    <div className={styles.container}>
      <div className={styles.agree}>
        <Checkbox label="" />
        <span className={styles.text}>
          <em>개인정보보호정책</em>에 동의합니다.(필수)
        </span>
      </div>
    </div>
  );
};

export default TermsAgree;
