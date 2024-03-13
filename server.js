const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cors = require("cors");
const app = express();
const port = 5000;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/mentor",require('./routes/Mentorroute'));
app.use("/user",require('./routes/userroute'))
app.use(cors());
mongoose.connect("mongodb://localhost:27017/learningapplication");
// mongoose.connect("mongodb+srv://ragul86100:H81NNozAF2h1ulw2@learningcluster.7vorbma.mongodb.net/?retryWrites=true&w=majority&appName=LearningCluster/learningapplication");

const db = mongoose.connection;
db.on('error', (error) => {
  console.log(error);
});
db.once('open',()=>{console.log("dataBase is connected")})

app.listen(5000, () => {
  console.log(`IT is worked succefully ${port}`);
});
