import Axios from "axios";

export default function handler(req, res) {
  console.log(req.body);
  Axios.post(
    "https://api.trypureblue.com/user/shipping-info",
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
      console.log(respond.data);
      return res.status(200).json(respond.data);
    })
    .catch(function (error) {
      return res.status(400).json(error);
    });
}
