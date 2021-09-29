const express = require("express");
const cors = require("cors");
const user = require("./routes/userRoute");
const tweet = require("./routes/tweetRoute");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const PORT = 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", user);
app.use("/tweet", tweet);

app.listen(process.env.PORT || 5000, function () {
  console.log(`App listening at http://localhost:${process.env.PORT || 5000}`);
});
