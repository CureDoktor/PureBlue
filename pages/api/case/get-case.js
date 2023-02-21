import Axios from "axios";

export default function handler(req, res) {
  Axios.get("https://api.trypureblue.com/case/case", {
    headers: {
      // "Content-Type": "application/json",
      "Site-Token": "123456",
      "Authorization": "Bearer " + req.body.Token,
    },
  })
    .then((respond) => {
      //console.log(respond.data);
      res.status(200).json(respond.data);
    })
    .catch(function (error) {
      res.status(400).json(error);
    });
}
