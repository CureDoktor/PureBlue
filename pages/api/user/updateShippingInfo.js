import Axios from "axios";
import ApiError from "../../../components/Apifunction";
export default function handler(req, res) {
  const scenario = req.headers["scenario"] ? req.headers["scenario"] : "";

  Axios.post(
    process.env.NEXT_PUBLIC_API_KEY + "/user/user-profile" + scenario,
    req.body.formData,
    {
      headers: {
        "Content-Type": "application/json",
        "Site-Token": process.env.SITE_TOKEN,
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
