const ImageItem = ({ imgFile, alt = "" }) => {
  let src;
  try {
    src = require(`../../../assets/imgs/${imgFile}`);
  } catch (error) {
    console.error("이미지를 찾을 수 없음");
    return null;
  }

  return <img src={src} alt={alt} />;
};

export default ImageItem;
