import Axios from "axios";
import ApiError from "../../../components/Apifunction";
import Formidable from "formidable";
import { useContext } from "react";

export const config = {
  api: {
    bodyParser: false,
  },
};

const cure = (something) => {
  // console.log(something);
  Axios.post(process.env.NEXT_PUBLIC_API_KEY + "/case/upload-file", something, {
    headers: {
      "Site-Token": "123456",
      Authorization:
        "Bearer " +
        "cVWiiUgpKrNWvqBu-Cbc5gnv-NQ6VTYOBL5_CiJvmrxR1_i67em0qsGJEWR82-hI_KmFhgEFmRVXW6Cbrhh1YrDAGwbGwWfO2_R0khchCNF65kEsaD6_F_ATaSZXYayXnWF2UMqNRny5nKDCkpqrb6hDXLl8WGyEaO6q2HYSkzPyS58CnxewyATQ96Y3zVR1ZsjxJu0v",
    },
  })
    .then((respond) => {
      console.log("RESPOND ->", respond);
      return res.status(200).json(respond.data);
    })
    .catch(function (error) {
      // let response = ApiError(error.response);
      // res.status(400).json(response);
      console.log("ERROR ->", error.response?.data);
    });
};

export default function handler(req, res) {
  const form = Formidable();

  form.parse(req, (err, fields, files) => {
    // console.log("ERR ->", err);
    // console.log("FIELDS ->", fields);
    const { mimetype: type, originalFilename: name, size } = files.file[0];
    const formData = new FormData();

    formData.append("FileForm[imageType]", JSON.stringify(files.file, null, 2));
    console.log("FILES ->", files);
    // console.log("USAO");
    cure(formData);
  });
}
