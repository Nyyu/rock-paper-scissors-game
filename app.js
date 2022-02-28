const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.sendFile(__dirname + "/app.html"));

app.get("/rules", (req, res) => res.sendFile(__dirname + "/rules.html"));

app.listen(process.env.PORT || 3000, () =>
    console.log(`[app] 🚗🌫 on port ${process.env.PORT || 3000}`)
);
