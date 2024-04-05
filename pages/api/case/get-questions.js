import Axios from "axios";
import ApiError from "../../../components/Apifunction";
export default function handler(req, res) {
  const caseId = req.headers["case"] ? req.headers["case"] : "";
  Axios.get(
    process.env.NEXT_PUBLIC_API_KEY +
      "/questionnaire/get-by-case?case_id=" +
      caseId,
    {
      headers: {
        "Content-Type": "application/json",
        "Site-Token": process.env.SITE_TOKEN,
        "Authorization": "Bearer " + req.body.Token,
      },
    }
  )
    .then((respond) => {
      res.status(200).json(respond.data);
    })
    .catch(function (error) {
      let response = ApiError(error.response.data);
      res.status(400).json(response);
    });
}
