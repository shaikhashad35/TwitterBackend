const UserSchema = require("./UserModel");
const TweetSchema = require("./TweetModel");

const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.MONGOURI + "twitteer?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch(console.log);

const UserModel = new mongoose.model("User", UserSchema);
const TweetModel = new mongoose.model("Tweet", TweetSchema);

module.exports = {
  UserModel,
  TweetModel,
  mongoose,
};
