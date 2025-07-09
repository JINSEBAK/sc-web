import styled from "styled-components";

const ProjectDetailImages = (props) => {
  const { imageList } = props;
  return (
    <StyledImageList>
      {imageList.length > 0 && (
        <>
          {imageList.map((image, index) => (
            <img
              key={`detail-image-${index}`}
              src={`${process.env.REACT_APP_IMG_URL}${image.workFileImgPath}`}
              alt={""}
            />
          ))}
        </>
      )}
    </StyledImageList>
  );
};

export default ProjectDetailImages;

const StyledImageList = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: auto;
  }
`;
