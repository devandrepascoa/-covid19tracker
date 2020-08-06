const express = require("express");
const cors = require("cors");
const path = require("path");


//Creates application with framework(routing is main)
const app = express();

//Port for the server
const port = process.env.PORT || 80;

//Uses CORS middleware
app.use(cors());

//Static folder for Client part
app.use(express.static(path.join(__dirname, "/public/")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

//Starts the server
app.listen(port, function () {
    console.log("The server has started at port " + port);
});

