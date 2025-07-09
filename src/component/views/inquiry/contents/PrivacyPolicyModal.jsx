import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { popupOpenCheck } from "util/common";

const PrivacyPolicyModal = (props) => {
  const { t } = useTranslation(["page"]);
  const { onClose } = props;

  const onClickClose = () => {
    onClose();
    setTimeout(() => {
      popupOpenCheck();
    }, 0);
  };
  return (
    <StyledPrivacyPolicyModal>
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="btn-close" onClick={onClickClose}>
            <i className="icon icon-close"></i>
          </button>
        </div>
        <div className="modal-body">
          <div className="terms">
            <h3>{t(`page:popup.privacy.title`)}</h3>
            <div>
              <p>{t(`page:popup.privacy.policy_1`)}</p>
            </div>
            <div>
              <strong>{t(`page:popup.privacy.policy_2_title`)}</strong>
              <p>{t(`page:popup.privacy.policy_2_description`)}</p>
            </div>
            <div>
              <strong>{t(`page:popup.privacy.policy_3_title`)}</strong>
              <p>{t(`page:popup.privacy.policy_3_description`)}</p>
            </div>
            <div>
              <strong>{t(`page:popup.privacy.policy_4_title`)}</strong>
              <p>{t(`page:popup.privacy.policy_4_description01`)}</p>
              <p>{t(`page:popup.privacy.policy_4_description02`)}</p>
              <p>{t(`page:popup.privacy.policy_4_description03`)}</p>
              <p>{t(`page:popup.privacy.policy_4_description04`)}</p>
              <p>{t(`page:popup.privacy.policy_4_description05`)}</p>
            </div>
            <div>
              <strong>{t(`page:popup.privacy.policy_5_title`)}</strong>
              <p>{t(`page:popup.privacy.policy_5_description`)}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledPrivacyPolicyModal>
  );
};

export default PrivacyPolicyModal;

const StyledPrivacyPolicyModal = styled.div`
  position: fixed;
  z-index: 3000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  .modal {
    background-color: #fff;
    max-width: 720px;
    margin: auto;
    padding: 50px 50px 42px;
    position: relative;
    .btn-close {
      width: 32px;
      height: 32px;
      position: absolute;
      right: 20px;
      top: 20px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      i {
        width: 100%;
        height: 100%;
        display: block;
        background-size: 100%;
      }
    }
    .modal-body {
      h3 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 1.75rem;
      }
      div {
        margin-bottom: 1.5rem;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
      p {
        font-size: 12px;
        line-height: 20px;
      }
      strong {
        font-size: 12px;
        line-height: 20px;
        font-weight: 700;
      }
    }
  }
`;
