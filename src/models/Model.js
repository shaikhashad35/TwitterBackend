const UserSchema = require("./User");
const TweetSchema = require("./Tweet");

const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.mongoURI + "twitteer?retryWrites=true&w=majority", {
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