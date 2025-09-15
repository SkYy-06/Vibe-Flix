import jwt from "jsonwebtoken";
import User from "../models/User.js";

// this function is used to secure the route so that no unauthorized user can get access
export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; // request to get jwt cookie

    if (!token) {
      // if no token -> unauthorized
      return res
        .status(401)
        .json({ message: "Unauthorized  - No token provided" });
    }

    // verify the token with the JWT_SECRET KEY
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);


    

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    // uses the userID from the token payload  to load the user
    const user = await User.findById(decoded.userId).select("-password")

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    }

    req.user = user; // user  loaded from DB

    next();  // executes the next step / function
  } catch (error) {
    console.log("Error in protectRoute middleware", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
