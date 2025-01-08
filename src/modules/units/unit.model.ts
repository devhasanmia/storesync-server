import { model, Schema } from "mongoose";
import { TUnit } from "./unit.type";

const unitSchema = new Schema<TUnit>(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      max: 20,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

const Unit = model<TUnit>("Unit", unitSchema);

export default Unit
