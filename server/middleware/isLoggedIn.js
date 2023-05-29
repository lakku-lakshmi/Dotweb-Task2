// import user model here
const jwt = require("jsonwebtoken");
const userInfo = require("../model/user");
const secret="myscretkey";

const isLoggedIn = async (req, res, next) => {
  try {
    // console.log(req.headers["x-access-token"]);
    const token = req.headers.authorization;
    console.log(token, "this is the token");
    if (token) {
      const payload =await jwt.verify(token,secret);

      console.log(payload, ".........payload");
      const user = await userInfo.findById(payload.data._id);
      console.log(user, "this the user fromlogged in");

      if (!user) {
        const error = new Error("User not found");
        error.statusCode = "MFBIL01";
        throw error;
      }
      return next();
    } else {
      console.log("the else part yeee");
      const error = new Error("Token not found");
      error.statusCode = "MFBIL03";
      throw error;
    }
  } catch (error) {
    console.log(error);
    if (!error.statusCode) {
      error.statusCode = "MFBIL44";
    }
    return res.status(400).send({
      msg: error.message,
      statusCode: error.statusCode,
      // token:false
    });
  }
};

module.exports = { isLoggedIn };
