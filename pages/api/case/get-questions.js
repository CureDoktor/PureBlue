import Axios from "axios";
import ApiError from "../../../components/Apifunction";
export default function handler(req, res) {
  Axios.get("https://staging-api.trypureblue.com/case/get-questions", {
    headers: {
      // "Content-Type": "application/json",
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
