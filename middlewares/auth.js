import { UnAuthenticatedError } from "../errors/index.js";
import jwt from "jsonwebtoken";
const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
  //console.log(authHeader);
  const token = authHeader.split(" ")[1];
  // console.log(token);

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    //console.log("from payload", payload);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
};

export default auth;
