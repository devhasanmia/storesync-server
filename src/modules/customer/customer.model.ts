import { model, Schema } from "mongoose";
import { TCustomer } from "./customer.type";

const customerSchema = new Schema<TCustomer>(
  {
    name: {
      type: String,
      required: true
    },
    mobile: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      default: ""
    },
    address: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true
    },
    nid: {
      type: Number
    },
    dob: {
      type: String,
      default: ""
    },
    due: {
      type: Number,
        default: 0
    },
    balance: {
      type: Number,
        default: 0
    }
  },
  {
    timestamps: true
  }
);

const Customer = model<TCustomer>("Customer", customerSchema);

export default Customer;
