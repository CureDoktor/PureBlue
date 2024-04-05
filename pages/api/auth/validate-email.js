import Axios from "axios";
import ApiError from "../../../components/Apifunction";
export default function handler(req, res) {
  Axios.post(
    process.env.NEXT_PUBLIC_API_KEY + "/auth/validate-email",
    req.body,
    {
      headers: {
        "Content-Type": "application/json",
        "Site-Token": process.env.SITE_TOKEN,
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
