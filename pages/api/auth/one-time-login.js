import Axios from "axios";
import ApiError from "../../../components/Apifunction";
export default function handler(req, res) {
  Axios.get(
    process.env.NEXT_PUBLIC_API_KEY +
      `/auth/get-access-token/?email=${req.body.email}&token=${req.body.token}`,
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
      console.log(error.response);
      let response = ApiError(error.response.data);
      res.status(400).json(response);
    });
}
