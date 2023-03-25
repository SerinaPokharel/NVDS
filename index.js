const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000, () => {

  console.log("Application started and Listening on port 3000");
});

// server css as static
app.use(express.static(__dirname));

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

app.get("/donate", (req, res) => {
  res.sendFile(__dirname + "/src/donate.html");
});

app.post("/", (req, res) => {
  var subName = req.body.yourname
  var subEmail = req.body.youremail;
 res.send("Hello " + subName + ", Thank you for subcribing. You email is " + subEmail);
});
