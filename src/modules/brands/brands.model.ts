import { model, Schema } from "mongoose";
import { TBrand } from "./brand.type";

const brandSchema = new Schema<TBrand>(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      max: 30,
      unique: true
    }
  },
  { timestamps: true }
);

const Brand = model<TBrand>("Brand", brandSchema);

export default Brand;
