import mongoose from "mongoose";
import {app} from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) throw new Error("JWT KEY must be defined");
  if (!process.env.MONGO_URI) throw new Error("MONGO URI must be defined");
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
  app.listen(3000, () => {
    console.log("Listening on 3000 !!");
  })
}

start();
