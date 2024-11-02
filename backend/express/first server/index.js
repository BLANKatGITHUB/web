import express from "express";
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("hello world");
})

app.get("/about", (req, res) => {
    res.send("<h>About </h>");
})

app.get("/Contact", (req, res) => {
    res.send("<h1>Contact</h1>");
})

app.listen(port, () => {
    console.log("server is running");
})
