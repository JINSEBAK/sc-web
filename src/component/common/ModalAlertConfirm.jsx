import styled from "styled-components";

export const Alert = (props) => {
  const { title, message, onClose, onConfirm } = props;
  const onClickHandle = () => {
    if (onConfirm) {
      onConfirm();
      onClose();
    } else {
      onClose();
    }
  };
  return (
    <StyledModalAlert>
      <div className="modal">
        {title && <div className="modal-head">{title}</div>}
        <div
          className="modal-body"
          dangerouslySetInnerHTML={{ __html: message }}
        />
        <div className="modal-tail">
          <button type="button" onClick={onClickHandle}>
            확인
          </button>
        </div>
      </div>
    </StyledModalAlert>
  );
};

export const Confirm = (props) => {
  const { title, message, onClose, onConfirm } = props;

  const onClickConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <StyledModalAlert>
      <div className="modal confirm">
        {title && <div className="modal-head">{title}</div>}
        <div
          className="modal-body"
          dangerouslySetInnerHTML={{ __html: message }}
        />
        <div className="modal-tail">
          <button type="button" onClick={onClose}>
            취소
          </button>
          {onConfirm && (
            <button type="button" onClick={onClickConfirm}>
              확인
            </button>
          )}
        </div>
      </div>
    </StyledModalAlert>
  );
};

const StyledModalAlert = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  left: 0;
  top: 0;
  display: flex;
  .modal {
    margin: auto;
    background: #fff;
    width: 80%;
    max-width: 320px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    overflow: hidden;
    .modal-head {
      padding: 1rem 1.5rem;
    }
    .modal-body {
      padding: 2rem 1.5rem;
      line-height: 20px;
      border-top: 1px solid #dadfe9;
      border-bottom: 1px solid #dadfe9;
    }
    .modal-tail {
      display: flex;
    }
    button {
      flex: 1;
      background-color: transparent;
      border: none;
      font-size: 1rem;
      padding: 1rem 0;
      text-align: center;
      cursor: pointer;
      & + button {
        border-left: 1px solid #dadfe9;
      }
    }
  }
`;
