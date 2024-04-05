import axios from "axios";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer();

const cure = (formData, res) => {
  axios
    .post(process.env.NEXT_PUBLIC_API_KEY + "/case/upload-file", formData, {
      headers: {
        "Site-Token": process.env.SITE_TOKEN,
        "Content-Type": "multipart/form-data",
        Accept: "*/*",
        Authorization: "Bearer " + formData.get("token"),
      },
    })
    .then((respond) => {
      return res.status(200).json(respond.data);
    })
    .catch(function (error) {
      return res.status(400).json(error.response?.data);
    });
};

export default async function handler(req, res) {
  upload.any()(req, res, (err) => {
    if (err) {
      console.error("Error uploading file:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const file = req.files[0];

    const formData = new FormData();

    const blobData = new Blob([file.buffer], { type: file.mimetype });

    formData.append(
      "FileForm[imageFile]",
      blobData,
      `filename.${file.originalname.split(".").pop()}`
    );
    formData.append("token", req.body.token);

    // Call the cure function to send the FormData to the server
    cure(formData, res);
  });
}
