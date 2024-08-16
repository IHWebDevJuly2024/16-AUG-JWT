const jwt = require("jsonwebtoken");

// this is the middleware that is going to check if the request includes our token
const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    console.log(token);

    const payload = jwt.verify(token, process.env.TOKEN_SECRET);

    req.payload = payload;

    console.log("THIS IS THE PAYLOAD==> ", payload);

    next();
  } catch {
    res.status(401).json("please login again");
  }
};

module.exports = { isAuthenticated };
