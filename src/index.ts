import express from "express";
import dotenv from "dotenv";
import router from "./routes/api/clients";
import databaseConnection from "./db/db.config";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use(express.static("./public"));

// route
app.use("/api/v1", router);

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
