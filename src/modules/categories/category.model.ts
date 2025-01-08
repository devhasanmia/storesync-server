import { model, Schema } from "mongoose";
import { TCategory } from "./category.type";

const categorySchema = new Schema<TCategory>(
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

const Category = model<TCategory>("Category", categorySchema);

export default Category;
