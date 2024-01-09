const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cors = require("cors");
const app = express();
const port = 5000;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/user",require('./routes/Mentorroute'));
app.use(cors());
mongoose.connect("mongodb://localhost:27017/learningapplication");

const db = mongoose.connection;
db.on('error', (error) => {
  console.log(error);
});
db.once('open',()=>{console.log("dataBase is connected")})

app.listen(5000, () => {
  console.log(`IT is worked succefully ${port}`);
});
