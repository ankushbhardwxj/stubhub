import express, {Request, Response} from "express";
import {requireAuth, validateRequest} from "@ankushstubhub/common";
import {body} from "express-validator";

const router = express.Router();

const validator = [
  body('title').not().isEmpty().withMessage("Title is required")
]

router.post("/api/tickets", requireAuth, validator, validateRequest,
  async (req: Request, res: Response) => {
    res.sendStatus(200);
  })

export {router as createTicketRouter};
