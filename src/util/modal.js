import { confirmAlert } from "react-confirm-alert";
import PrivacyPolicyModal from "component/views/inquiry/contents/PrivacyPolicyModal";

/**
 * 개인정보 정책 약관 팝업
 */
export const modalPrivacyPolicy = () => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return <PrivacyPolicyModal onClose={onClose} />;
    },
    closeOnEscape: false,
    closeOnClickOutside: false,
  });
};
