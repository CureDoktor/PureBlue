import Axios from "axios";
import ApiError from "../../components/Apifunction";
export default function handler(req, res) {
  Axios.get(process.env.NEXT_PUBLIC_API_KEY + "/states", {
    headers: {
      "Content-Type": "application/json",
      "Site-Token": "123456",
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
