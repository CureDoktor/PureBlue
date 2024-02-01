import React, { useState, useRef } from "react";
import styles from "./StepSeventeen.styles.module.scss";
import Image from "next/image";

const StepSeventeen = ({ onNext }) => {
  const [uploadedImage, setUploadedImage] = useState();
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setUploadedImage(null);
    }
  };

  const handleSelectPhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleTakePhotoClick = () => {};

  return (
    <div className={styles.mainContainer}>
      <h6>Identity Verification</h6>
      <div className={styles.hrr}></div>
      <p>
        Upload a photo of
        <br /> your ID
      </p>
      <span>
        By uploading your ID, the physician will be able to verify <br /> your
        identity quicker and get your medication fulfilled faster.
      </span>
      <div>
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <div className={styles.imagePreview}>
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded ID"
              style={{ width: "15em", height: "8.9rem" }}
              className={styles.defaultImage}
            />
          ) : (
            <img
              src="/assets/sildenafilOrderFlow/id/id.png"
              alt="Default ID"
              layout="responsive"
              className={styles.defaultImage}
              //   style={{ width: "100%" }}
            />
          )}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.selectPhoto} onClick={handleSelectPhotoClick}>
          Select photo
        </button>
        <button className={styles.takePhoto} onClick={onNext}>
          Take photo
        </button>
      </div>
      <div className={styles.hrrr}></div>
    </div>
  );
};

export default StepSeventeen;
