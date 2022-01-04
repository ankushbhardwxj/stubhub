import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import 'express-async-errors';
import {errorHandler, NotFoundError} from "@ankushstubhub/common";
import {deleteOrderRouter} from "../routes/delete";
import {indexOrderRouter} from "../routes";
import {newOrderRouter} from "../routes/new";
import {showOrderRouter} from "../routes/show";


const app = express();
app.set('trust proxy', true);
app.use(bodyParser.json());
app.use(cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== "test"
}));

app.use(indexOrderRouter);
app.use(newOrderRouter);
app.use(deleteOrderRouter);
app.use(showOrderRouter);

app.all("*", async (req, res) => {throw new NotFoundError();})
app.use(errorHandler);

export {app};
