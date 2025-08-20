import { useRef, useState } from "react";
import ImageItem from "../atoms/ImageItem";
import styles from "./FileUploader.module.css";

const FileUploader = () => {
  //
  const [fileInfo, setFileInfo] = useState({
    name: "",
    size: 0
  });

  const fileRef = useRef(null);

  const MAX_SIZE = 10 * 1024 * 1024; // 10Mb

  const onChangeFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_SIZE) {
      }
      setFileInfo({ ...fileInfo, name: file.name, size: file.size });
    }
  };

  const onDeleteFile = () => {
    setFileInfo({ name: "", size: 0 });
    if (fileRef.current) {
      fileRef.current.value = ""; // reset
    }
  };

  const getSize = () => {
    const bytes = fileInfo.size;
    if (bytes === 0) return "0B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + sizes[i];
  };

  return (
    <>
      <div className={styles.uploader}>
        {fileInfo.name && fileInfo.size ? (
          <div className={styles.file}>
            <span className={styles.name}>{fileInfo.name}</span>
            <span className={styles.size}>({getSize(fileInfo.size)})</span>
            <button
              type="button"
              className={styles["b-del"]}
              onClick={onDeleteFile}
            >
              <ImageItem imgFile={"icon_close.svg"} />
            </button>
          </div>
        ) : (
          <label>
            <span className={styles.lb}>파일첨부</span>
            <input ref={fileRef} type="file" onChange={onChangeFile} />
            <ImageItem imgFile={"icon_add_b.svg"} />
          </label>
        )}
      </div>
      <p className={styles.guide}>
        pdf/한글/zip 형식 지원, 파일용량 10 MB 이내, 최대 1개 파일 첨부 가능
      </p>
    </>
  );
};

export default FileUploader;
