import Axios from "axios";
import ApiError from "../../../components/Apifunction";
export default function handler(req, res) {
  const caseId = req.headers["case"] ? req.headers["case"] : "";
  console.log(caseId);
  Axios.post(
    process.env.NEXT_PUBLIC_API_KEY +
      "/order/cancel-create-case?case_id=" +
      caseId,
    req.body.payload,
    {
      headers: {
        "Content-Type": "application/json",
        "Site-Token": "123456",
        "Authorization": "Bearer " + req.body.Token,
      },
    }
  )
    .then((respond) => {
      return res.status(200).json(respond.data);
    })
    .catch(function (error) {
      let response = ApiError(error.response.data);
      res.status(400).json(response);
    });
}
