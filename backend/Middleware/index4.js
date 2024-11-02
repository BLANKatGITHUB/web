import express from "express";
import bodyParser from "body-parser";



const __dirname = import.meta.dirname;
const app = express();
const port = 3000;
var band ;

app.use(bodyParser.urlencoded({extended:true}));

function bandName(req,res,next) {
  console.log(req.body);
  band = req.body["street"] + req.body["pet"];
  console.log(band);
  next();
}

app.use(bandName);

app.get("/", (req,res) => {
  res.sendFile(__dirname+"/public/index.html");
});

app.post("/submit", (req,res) => {
  res.send(`<h1> Band Name is </h1> <h2>${band}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
