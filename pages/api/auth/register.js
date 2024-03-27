import Axios from "axios";
import ApiError from "../../../components/Apifunction";
export default function handler(req, res) {
  const scenario = req.headers["scenario"] ? req.headers["scenario"] : "";

  Axios.post(
    process.env.NEXT_PUBLIC_API_KEY + `/auth/register` + scenario,
    req.body,
    {
      headers: {
        "Content-Type": "application/json",
        "Site-Token": "123456",
      },
    }
  )
    .then((respond) => {
      res.status(200).json(respond.data.data);
    })
    .catch(function (error) {
      let response = error.response.data.errors;
      //let response = ApiError(error.response.data);
      res.status(400).json(response);
    });
}
