var jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    jwt.verify(token, "shhhhh", function (err, decoded) {
      if (err) {
        res.status(400).json({ message: "please login" });
        return;
      }

      next();
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { Auth };
