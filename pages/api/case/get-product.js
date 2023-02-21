import Axios from "axios";

export default function handler(req, res) {
  Axios.get("https://api.trypureblue.com/case/product", {
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
      res.status(400).json(error);
    });
}
