const express = require("express");
const cors = require("cors");
// const UserModel = require("./model");
// const TweetModel = require("./model");
const user = require("./routes/userRoute");
const tweet = require("./routes/tweetRoute");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const PORT = 8000;

const app = express();

app.use(cors());
app.use(express.json());

//Authentication middle ware which authenticates the token before calling any api.
const AuthMiddleware = async (req, res, next) => {
  //get the token from header
  let token = req.headers["twi-token"];

  //Token not found
  if (!token) {
    return res.status(401).send({ er: "No token found", auth: false });
  }

  //verify the token
  jwt.verify(token, process.env.SECRET_KEY, async (err, decode) => {
    if (err) {
      return res.status(500).send({ auth: false, er: "Authentication failed" });
    }

    let result = await UserModel.find({
      username: decode.username, // get the Usermodel from the decode username
    });

    //appending the user detail in header request
    req.user = result[0];
    next();
  });

  console.log(req.body);
};

app.use("/user", user);
app.use("/tweet", tweet);

app.listen(PORT, function () {
  console.log(`App listening at http://localhost:${PORT}`);
});
