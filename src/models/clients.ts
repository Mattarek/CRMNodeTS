import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "You must provide a valid name."],
      maxLength: [20, "Name can't be more than 20 characters."],
    },
    surname: {
      type: String,
      trim: true,
      required: [true, "You must provide a valid surname."],
      maxLength: [20, "Surname can't be more than 20 characters."],
    },
    // phoneNumber: {
    //   type: Number,
    //   trim: true,
    //   required: [true, "You must provide a valid surname."],
    //   maxLength: [9, "Phone number can't be more than 9 characters."],
    // },
    // login: {
    //   type: String,
    //   trim: true,
    //   required: [true, "You must provide a valid login."],
    //   maxLength: [20, "Login can't be more than 20 characters."],
    // },
    // address: {
    //   type: String,
    //   trim: true,
    //   required: [true, "You must provide a valid address."],
    //   maxLength: [100, "Address can't be more than 100 characters."],
    // },
    // dateOfBirth: {
    //   type: String,
    //   trim: true,
    //   required: [true, "You must provide a valid address."],
    //   maxLength: [100, "Address can't be more than 100 characters."],
    // },
    // email: {
    //   required: true,
    //   type: String,
    //   trim: true,
    //   maxLength: [50, "E-mail can't be more than 50 characters."],
    // },
    // role: {
    //   required: true,
    //   type: String,
    //   trim: true,
    // },
  },
  { timestamps: true }
);

const Client = mongoose.model("clients", ClientSchema);
export default Client;
