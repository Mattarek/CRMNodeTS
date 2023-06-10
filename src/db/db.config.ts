import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseConnection = () => {
  return mongoose.connect(process.env.DATABASE as string);
};
export default databaseConnection;
