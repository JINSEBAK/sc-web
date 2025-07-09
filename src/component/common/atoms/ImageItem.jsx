const ImageItem = ({ imgUrl, alt = "" }) => {
  const src = imgUrl
    ? new URL(`/assets/imgs/${imgUrl}`, import.meta.url).href
    : null;

  return src ? <img src={src} alt={alt} /> : null;
};

export default ImageItem;
