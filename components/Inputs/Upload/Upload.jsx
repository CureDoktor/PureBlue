import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./Upload.styles.module.scss";

const Upload = ({ name }) => {
  const { register, watch } = useFormContext();
  const value = watch(name);
  console.log(value);
  return (
    <label className={styles.container}>
      <input type="file" {...register(name)} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="63"
        viewBox="0 0 50 63"
      >
        <path
          id="file-upload"
          d="M50,35.56q0-9.377,0-18.755a8.624,8.624,0,0,0-2.826-6.56c-2.8-2.623-5.634-5.2-8.433-7.828A8.769,8.769,0,0,0,32.485,0Q20.69.011,8.895,0A8.561,8.561,0,0,0,.007,8.894q-.014,22.6,0,45.2A8.562,8.562,0,0,0,8.88,63Q25,63.009,41.126,63a9.4,9.4,0,0,0,2.128-.213,8.542,8.542,0,0,0,6.738-8.624c.016-6.2,0-12.4,0-18.6M16.59,21.457q3.236-3.272,6.5-6.519a2.513,2.513,0,0,1,3.753-.079q3.424,3.354,6.753,6.806a2.6,2.6,0,0,1-3.7,3.643c-.725-.7-1.38-1.471-2.066-2.211l-.215.142v3.5c0,1.819.009,3.637,0,5.456a2.611,2.611,0,1,1-5.215-.034c-.011-2.946-.007-5.891-.01-8.837a1.531,1.531,0,0,0-.078-.215c-.718.732-1.364,1.414-2.035,2.071a2.625,2.625,0,1,1-3.686-3.72M35.1,48.9c-3.368.023-6.736.007-10.1.007s-6.736.023-10.1-.009a2.587,2.587,0,0,1-2.415-3.649A2.523,2.523,0,0,1,14.9,43.672q10.1-.02,20.207,0A2.581,2.581,0,0,1,37.731,46.3,2.553,2.553,0,0,1,35.1,48.9"
          transform="translate(0 0)"
          fill="#999"
        />
      </svg>
      <span>
        {value?.[0]?.name ? (
          value?.[0]?.name
        ) : (
          <>
            Drag & drop your ID file here <br />
            or <span>browse</span> to upload.
          </>
        )}
      </span>
    </label>
  );
};

export default Upload;
