import mongoose from "mongoose";
import {app} from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) throw new Error("JWT KEY must be defined");
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
  app.listen(3000, () => {
    console.log("Listening on 3000 !!");
  })
}

start();
