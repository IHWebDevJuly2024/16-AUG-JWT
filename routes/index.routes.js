const router = require("express").Router();
const { isAuthenticated } = require("../middlewares/jwt.middleware");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/admin-area", isAuthenticated, (req, res) => {
  res.json({ message: "the token is valid", payload: req.payload });
});

module.exports = router;
