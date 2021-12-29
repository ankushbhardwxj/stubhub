import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
}

// inside the express project, add current user to request interface
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.jwt) return next();
  const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
  req.currentUser = payload;
  next();
}
