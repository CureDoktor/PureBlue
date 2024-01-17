import Axios from "axios";
import ApiError from "../../../components/Apifunction";
export default function handler(req, res) {
  console.log(req.body);
  Axios.post(
    process.env.NEXT_PUBLIC_API_KEY + "/case/" + req.body.caseId + "/products",
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
      console.log(error.response);
      let response = ApiError(error.response.data);
      res.status(400).json(response);
    });
}
