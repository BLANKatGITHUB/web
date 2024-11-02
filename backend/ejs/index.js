import express from "express";


const app = express();
const port = 3000;

var day = new Date();



app.get("/", (req, res) => {
    let dayOfWeek = day.getDay();

    if (dayOfWeek == 0 || dayOfWeek == 6){
        var type = "Weekend";
        var adv = "Lets do something intresting";
    }

    else {
        var type = "Workday";
        var adv = "Lets get to work";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });
});

app.listen(port, (req, res) => {
    console.log("server started successfully");
});
