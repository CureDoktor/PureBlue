import Axios from "axios";
import ApiError from "../../../components/Apifunction";
import { Formidable } from "formidable";
import { useContext } from "react";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  const form = new Formidable();

  form.parse(req, (err, fields, files) => {
    var cure2 = new FormData();
    console.log(fields);
    cure2.append("file", fields);
    // const fileObject = formDataArray.find((item) => item.name === "file");
    // const fileValue = fileObject ? fileObject.value : undefined;

    // console.log(fileValue);
    // console.log(files.file);
    cure(cure2);
    // console.log(fields);
    // console.log(files.file);
  });
  const cure = (something) => {
    console.log(something);
    Axios.post(
      process.env.NEXT_PUBLIC_API_KEY + "/case/upload-file",
      something,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Site-Token": "123456",
          "Authorization":
            "Bearer " +
            "cVWiiUgpKrNWvqBu-Cbc5gnv-NQ6VTYOBL5_CiJvmrxR1_i67em0qsGJEWR82-hI_KmFhgEFmRVXW6Cbrhh1YrDAGwbGwWfO2_R0khchCNF65kEsaD6_F_ATaSZXYayXnWF2UMqNRny5nKDCkpqrb6hDXLl8WGyEaO6q2HYSkzPyS58CnxewyATQ96Y3zVR1ZsjxJu0v",
        },
      }
    )
      .then((respond) => {
        return res.status(200).json(respond.data);
      })
      .catch(function (error) {
        // let response = ApiError(error.response);
        // res.status(400).json(response);
        // console.log(error);
      });
  };
}
