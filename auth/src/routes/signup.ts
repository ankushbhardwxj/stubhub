import express, {Request, Response} from "express";
import {body, validationResult} from "express-validator";
import {RequestValidationError} from "../errors/request-validation-error";
import {User} from "../models/user";
import {BadRequestError} from "../errors/bad-request-error";
import jwt from "jsonwebtoken";
import {validateRequest} from "../middlewares/validate-request";

const router = express.Router();

const emailValidator = body('email').isEmail()
  .withMessage("Email must be valid");

const passwordValidator = body('password').trim().isLength({min: 4, max: 20})
  .withMessage("Password must be between 4 and 20 characters");

router.post("/api/users/signup", [emailValidator, passwordValidator], validateRequest,
  async (req: Request, res: Response) => {

    const {email, password} = req.body;
    const existingUser = await User.findOne({email});
    if (existingUser) {
      throw new BadRequestError("User already registered.");
    }

    const user = User.build({email, password});
    await user.save();

    const userJwt = jwt.sign({id: user.id, email: user.email}, process.env.JWT_KEY!);
    req.session = {jwt: userJwt};
    res.status(201).send(user);

  })

export {router as signupRouter};

