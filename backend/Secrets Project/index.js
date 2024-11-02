
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const __dirname = (import.meta.dirname);

var fromPaser = bodyParser.urlencoded({extended:true});

app.post("/check", fromPaser, (req,res) => {
    if (req.body.password === "ILoveProgramming") {
        res.sendFile(__dirname + "/public/secret.html");
    }

    else {
        res.send("<h1> Wrong password </h1> <h2> Try again </h2>");
    }
});

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log("Server is running");
});