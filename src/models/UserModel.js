const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String, required: true },
  following: [{ type: String }],
  follower: [{ type: String }],
});

module.exports = UserSchema;
