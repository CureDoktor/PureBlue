import Axios from "axios";

export default function handler(req, res) {
  // console.log(req.body);
  Axios.post("https://api.trypureblue.com/auth/login", req.body, {
    headers: {
      "Content-Type": "application/json",
      "Site-Token": "123456",
    },
  })
    .then((respond) => {
      //console.log(respond.data);
      res.status(200).json(respond.data);
    })
    .catch(function (error) {
      //console.log(error.response.data);
      res.status(400).json(error.response.data);
    });
}
