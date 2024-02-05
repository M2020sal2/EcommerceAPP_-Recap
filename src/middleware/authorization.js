import { asyncHandler } from "../utils/errorHandling.js";

//Authorization user or Admin or SuperAdmin
export const authorization = (accessRoles) => {
  // console.log(accessRoles);
  return asyncHandler(async (req, res, next) => {
    if (!accessRoles.includes(req.user.role)) {
      return next(new Error("you not authorization to do this"));
    } else {
      return next();
    }
  });
};
