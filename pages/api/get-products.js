import Axios from "axios";
import ApiError from "../../components/Apifunction";
export default function handler(req, res) {
  Axios.get(process.env.NEXT_PUBLIC_API_KEY + "/product", {
    headers: {
      // "Content-Type": "application/json",
      "Site-Token": "123456",
      "Authorization": "Bearer " + req.body.Token,
    },
  })
    .then((respond) => {
      console.log(respond.data);
      res.status(200).json(respond.data);
    })
    .catch(function (error) {
      console.log(error.response.data);
      let response = ApiError(error.response.data);
      res.status(400).json(response);
    });
}
