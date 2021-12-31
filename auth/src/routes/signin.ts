import express, {Request, Response} from "express";
import {body} from "express-validator";
import {BadRequestError} from "@ankushstubhub/common";
import {validateRequest} from "@ankushstubhub/common";
import {User} from "../models/user";
import {Password} from "../services/password";
import jwt from "jsonwebtoken";

const router = express.Router();

const validateUserData = [
	body('email').isEmail()
		.withMessage("Email must be valid"),
	body("password").trim().notEmpty()
		.withMessage("Please enter password")
];

router.post("/api/users/signin", validateUserData, validateRequest, async (req: Request, res: Response) => {
	const {email, password} = req.body;
	const existingUser = await User.findOne({email});
	if (!existingUser) throw new BadRequestError("Invalid credentials.");

	const passwordsMatch = Password.compare(existingUser.password, password);
	if (!passwordsMatch) throw new BadRequestError("Invalid credentials.");

	const userJwt = jwt.sign({id: existingUser.id, email: existingUser.email}, process.env.JWT_KEY!);
	req.session = {jwt: userJwt};
	res.status(201).send(existingUser);
});

export {router as signinRouter};

