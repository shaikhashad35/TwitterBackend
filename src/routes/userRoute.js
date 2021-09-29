const router = require("express").Router();
const { AuthMiddleware } = require("../controllers/AuthController");
const {
  signUp,
  login,
  follow,
  unfollow,
} = require("../controllers/UserController");
router.post("/signup", signUp);
router.post("/login", login);
router.post("/follow/:to_username", AuthMiddleware, follow);
router.post("/unfollow/:to_username", AuthMiddleware, unfollow);

module.exports = router;
