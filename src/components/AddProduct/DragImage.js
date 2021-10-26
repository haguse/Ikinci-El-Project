import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "../../actions/fileActions";
import AddFileIcon from "../../images/Add Product/FileIcon.svg";
import { useDispatch } from "react-redux";

const DragImage = ({ showProgress }) => {
  const dispatch = useDispatch();

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const fd = new FormData();
        fd.append("file", acceptedFiles[0]);
        dispatch(uploadFile(fd));
        showProgress();
      }
    },
    [dispatch, showProgress]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()}>
        <img src={AddFileIcon} alt="Add File" />
        <div className="add-file__wrapper__text">
          <p>Sürükleyip bırakarak yükle</p>
          <p>veya</p>
        </div>
        <label htmlFor="file-upload">
          <span>Görsel Seçin</span>
        </label>
        <input {...getInputProps()} />
      </div>
    </>
  );
};

export default DragImage;
