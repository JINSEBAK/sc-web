import styled from "styled-components";

const ModalImageView = (props) => {
  const { onClose, imagePath } = props;
  return (
    <StyledImageView>
      <div className="inner">
        <button onClick={onClose}>Close</button>
        <div className="img-box">
          <img src={imagePath} alt="크게보기" />
        </div>
      </div>
    </StyledImageView>
  );
};

export default ModalImageView;

const StyledImageView = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  padding: 5vw;
  background-color: rgba(0, 0, 0, 0.5);
  > .inner {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      background-color: transparent;
      color: #fff;
      border: none;
      font-size: 1.5rem;
      position: absolute;
      right: 0;
      top: 0;
      transform: translateY(-100%);
    }
    .img-box {
      overflow-y: auto;
      img {
      }
    }
  }
`;
