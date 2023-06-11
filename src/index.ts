import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import router from "./routes/api/clients";
import databaseConnection from "./db/db.config";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

// middleware
app.use(
  cors({
    credentials: true,
    methods: "GET,PATCH,POST,DELETE",
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("./public"));
app.use(cookieParser());

// route
app.use("/api/v1", router);
app.use("*", router);

// listening
const run = async () => {
  try {
    await databaseConnection();
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
run();
