import Axios from "axios";
import ApiError from "../../../components/Apifunction";
export default function handler(req, res) {
  Axios.post(
    process.env.NEXT_PUBLIC_API_KEY + "/questionnaire/save?questionnaire_id=1",
    req.body.formData,
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
      console.log(error.response);
      let response = ApiError(error.response.data);
      res.status(400).json(response);
    });
}
