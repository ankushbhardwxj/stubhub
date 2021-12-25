import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/api/users/currentuser", (req, res) => {res.send("Hi")});

app.listen(3000, () => {
  console.log("Listening on 3000 !!");
})
