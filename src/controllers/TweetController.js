const { TweetModel } = require("../models/Model");
const mongoose = require("mongoose");
module.exports = {
  createTweet: async (req, res) => {
    let { username } = req.user;
    let tweet = req.body.message;
    console.log(tweet);
    //creating tweet
    tweet = TweetModel({
      tweet: tweet,
      from: username,
      like: [],
      dislike: [],
      tweetedOn: new Date(),
    });
    await tweet.save(function (err) {
      if (err) {
        // Some other error while saving
        return res.status(400).send({ success: false, message: err });
      }
    });
    res.send({
      success: true,
      message: "Tweet Successfull!",
    });
  },
  getTweet: async (req, res) => {
    let { username } = req.params;
    let usertweets = await TweetModel.find({ from: username }, function (err) {
      if (err) {
        // Some other error while deleting
        return res.status(400).send({ success: false, message: err });
      }
    });

    res.send({
      success: true,
      message: "Tweets of User!",
      tweets: usertweets,
    });
  },
  deleteTweet: async (req, res) => {
    let { tweet_id } = req.params;
    console.log("Tweet:", tweet_id);
    await TweetModel.findByIdAndDelete(
      { _id: mongoose.Types.ObjectId(tweet_id.toString().trim()) },
      function (err) {
        if (err) {
          // Some other error while deleting
          return res.status(400).send({ success: false, message: err });
        }
      }
    );
    res.send({
      success: true,
      message: "Tweet Deleted!",
    });
  },
  feed: async (req, res) => {
    //Get the following list of that user from the header (token)
    let { username, following } = req.user;

    console.log(following);

    let temp = await TweetModel.find({ from: { $in: following } }).sort({
      tweetedOn: -1,
    });
    res.send({
      success: true,
      message: "Latest Tweets",
      tweets: temp,
    });
  },
  like: async (req, res) => {
    // Destructuring from the request header
    let { username } = req.user;

    let { tweet_id } = req.params;

    //Getting the tweet
    let tweet = await TweetModel.find({ _id: tweet_id });
    if (tweet.length < 1) {
      return res.status(400).send({
        success: false,
        message: "Tweet Not Found ",
      });
    }

    //Getting like(usersnames) who had like that tweet
    likes = tweet[0].like;

    //Checking if that user already liked that tweet
    if (!likes.includes(username)) {
      likes.push(username);
      await TweetModel.findOneAndUpdate(
        { _id: tweet_id }, //where in sql
        { like: likes } //set in sql
      );
    } else {
      res.send({ status: true, message: "Already liked" });
    }

    res.send({ success: true, message: "Liked" });
  },
  dislike: async (req, res) => {
    // Destructuring from the request header
    let { username } = req.user;

    let { tweet_id } = req.params;

    //Getting the tweet
    let tweet = await TweetModel.find({ _id: tweet_id });
    if (tweet.length < 1) {
      return res.status(400).send({
        success: false,
        message: "Tweet Not Found ",
      });
    }

    //Getting dislike(usersnames) who had dislike that tweet
    dislikes = tweet[0].dislike;

    //Checking if that user already disliked that tweet
    if (!dislikes.includes(username)) {
      dislikes.push(username);
      await TweetModel.findOneAndUpdate(
        { _id: tweet_id },
        { dislike: dislikes }
      );
    } else {
      res.send({ status: true, message: "Already disliked" });
    }
    res.send({ success: true, message: "Disliked" });
  },
};
