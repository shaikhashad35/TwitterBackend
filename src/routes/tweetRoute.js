const router = require("express").Router();
const { AuthMiddleware } = require("../controllers/AuthController");
const {
  createTweet,
  deleteTweet,
  getTweet,
  feed,
  like,
  dislike,
} = require("../controllers/TweetController");

router.post("/createtweet", AuthMiddleware, createTweet);
router.post("/deletetweet/:tweet_id", AuthMiddleware, deleteTweet);
router.get("/feed", AuthMiddleware, feed);
router.get("/tweet/:username", getTweet);
router.post("/like/:tweet_id", AuthMiddleware, like);
router.post("/dislike/:tweet_id", AuthMiddleware, dislike);

module.exports = router;
