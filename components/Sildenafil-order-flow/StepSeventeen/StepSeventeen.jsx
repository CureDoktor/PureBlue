import React, { useState, useRef } from "react";
import styles from "./StepSeventeen.styles.module.scss";
import { useContext } from "react";
import AuthContext from "../../../store/auth-context";
import Axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

const StepSeventeen = ({ onNext }) => {
  const [uploadedImage, setUploadedImage] = useState();
  const [imageForUpload, setImageForUpload] = useState();
  const fileInputRef = useRef(null);
  const router = useRouter();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);

      setImageForUpload(e.target.files);
    } else {
      setUploadedImage(null);
    }
  };

  const authCtx = useContext(AuthContext);

  const handleUploadFiles = async () => {
    // if (imageForUpload?.length) {
    // } else {
    //   return;
    // }
    var counter = 0;
    for (let i = 0; i < imageForUpload?.length; i++) {
      const formData = new FormData();
      if (imageForUpload && imageForUpload[i]) {
        const ih = imageForUpload[i];
        formData.append("file", ih);
        formData.append("token", authCtx.Token());
      }

      const route = "/api/case/upload-file";
      try {
        const rese = await Axios.post(route, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then((res) => {
            counter++;
          })
          .catch((error) => {
            alert(error);
          });
      } catch (err) {
        alert("Something went wrong!" + err);
      }
    }
    if (counter == imageForUpload?.length) {
      router.push("/account");
    }
  };

  const handleSelectPhotoClick = () => {
    fileInputRef.current.click();
  };

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
          multiple
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
        <button className={styles.takePhoto} onClick={handleUploadFiles}>
          Upload photo
        </button>
      </div>
      <div className={styles.hrrr}></div>
    </div>
  );
};

export default StepSeventeen;
