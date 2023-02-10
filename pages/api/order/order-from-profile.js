import Axios from "axios";

export default function handler(req, res) {
  console.log(req.body.Token);
  Axios.post("https://api.trypureblue.com/order/order-from-profile", "", {
    headers: {
      "Content-Type": "application/json",
      "Site-Token": "123456",
      "Authorization": "Bearer " + req.body.Token,
    },
  })
    .then((respond) => {
      console.log(respond.data);
      return res.status(200).json(respond.data);
    })
    .catch(function (error) {
      console.log(error.response);
      res.status(400).json(error.response.data);
    });
}
