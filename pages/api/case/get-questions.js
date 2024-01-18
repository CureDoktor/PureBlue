import Axios from "axios";
import ApiError from "../../../components/Apifunction";
export default function handler(req, res) {
  console.log(req.body);
  Axios.get(process.env.NEXT_PUBLIC_API_KEY + "/questionnaire/get?id=1", {
    headers: {
      "Content-Type": "application/json",
      "Site-Token": "123456",
      "Authorization": "Bearer " + req.body.Token,
    },
  })
    .then((respond) => {
      res.status(200).json(respond.data);
    })
    .catch(function (error) {
      let response = ApiError(error.response.data);
      res.status(400).json(response);
    });
}
